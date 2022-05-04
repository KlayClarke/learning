//
//  OnboardingView.swift
//  Restart
//
//  Created by Klay Anthony Clarke on 5/3/22.
//

import SwiftUI

struct OnboardingView: View {
	// MARK: - PROPERTY
	@AppStorage("onboarding") var isOnboardingViewActive: Bool = true
	@State private var buttonWidth: Double = UIScreen.main.bounds.width - 80 // make button width actual screen width minus 80 (pixels ??)
	@State private var buttonOffset: CGFloat = 0 // initialize button offset as 0 -- change that whilst in app
	@State private var isAnimating: Bool = false // initialize isAnimating variable as false -- I can change it to true under certain cases
	// MARK: - BODY
    var body: some View {
		ZStack {
			Color("ColorBlue")
				.ignoresSafeArea(.all, edges: .all) // ignore safe areas on iphone screen
			VStack(spacing: 20) { // vstack allows its children to be arranged in a vertical line
				// MARK: - HEADER
				Spacer()
				VStack(spacing: 0) {
					Text("Share.")
						.font(.system(size: 60))
						.fontWeight(.heavy)
						.foregroundColor(.white)
					Text("""
					It is not how much we give but
					how much love we put into giving
					""")
						.font(.title3)
						.fontWeight(.light)
						.foregroundColor(.white)
						.multilineTextAlignment(.center)
						.padding(.horizontal, 10)
				} //: HEADER
				.opacity(isAnimating ? 1 : 0)
				.offset(y: isAnimating ? 0 : -40)
				.animation(.easeOut(duration: 1), value: isAnimating)
				// value is required - must tell swift what value / variable is causing the change and animation
				// use shorthand conditionals to specify values of opacity and offset for animation
				// header fade (opacity) in from top to bottom (offset y)
				// MARK: - CENTER
				ZStack { // zstack allows its children to be arranged atop each other
					CircleGroupView(ShapeColor: .white, ShapeOpacity: 0.2) // use component
					Image("character-1")
						.resizable()
						.scaledToFit()
						.opacity(isAnimating ? 1 : 0)
						.animation(.easeOut(duration: 0.5), value: isAnimating)
					// image fade in (opacity) animation that takes 2 seconds to complete
				} //: CENTER
				Spacer()
				// MARK: - FOOTER
				ZStack {
						// PARTS OF THE CUSTOM SLIDE BUTTON
						// 1. BACKGROUND (STATIC)
						Capsule()
							.fill(Color.white.opacity(0.2))
						Capsule()
							.fill(Color.white.opacity(0.2))
							.padding(8)
						// 2. CALL TO ACTION TEXT
						Text("Get Started")
						.font(.system(.title3, design: .rounded))
						.fontWeight(.bold)
						.foregroundColor(.white)
						.offset(x:20)
						// 3. CAPSULE (DYNAMIC WIDTH)
					HStack {
						Capsule()
							.fill(Color("ColorRed"))
							.frame(width: buttonOffset + 80)
						Spacer()
					}
						// 4. CIRCLE (DRAGGABLE)
					HStack {
						ZStack {
							Circle()
								.fill(Color("ColorRed"))
							Circle()
								.fill(.black.opacity(0.15))
								.padding(8)
							Image(systemName: "chevron.right.2")
								.font(.system(size: 24, weight: .bold))
						}
						.foregroundColor(.white)
						.frame(width: 80, height: 80, alignment: .center)
						.offset(x: buttonOffset)
						.gesture(
							DragGesture()
								.onChanged { gesture in
									if gesture.translation.width > 0 && buttonOffset <= buttonWidth - 80 { // attempt to ensure that button is never dragged out of container
										buttonOffset = gesture.translation.width
									}
								}
								.onEnded { _ in
									withAnimation(Animation.easeOut(duration: 0.2)) {
										// run animation when drag ends
										if buttonOffset > buttonWidth/2 { // if user drags circle more than half the width of the container under button, snap circle to right of container and activate home view
											buttonOffset = buttonWidth - 80
											isOnboardingViewActive = false
										} else {
											buttonOffset = 0
										}
									}
								}
						) //: GESTURE
						Spacer()
					} //: HSTACK
				} //: FOOTER
				.frame(width: buttonWidth, height: 80, alignment: .center)
				.padding()
				.opacity(isAnimating ? 1 : 0)
				.offset(y: isAnimating ? 0 : 40)
				.animation(.easeOut(duration: 1), value: isAnimating)
				// footer drag bar fades in from bottom (1 second animation)
			} //: VSTACK
		} //: ZSTACK
		.onAppear(perform: {
			isAnimating = true // switch animation variable value from false to true when enter content initially renders
		})
	}
}
// MARK: - PREVIEW
struct OnboardingView_Previews: PreviewProvider {
    static var previews: some View {
        OnboardingView()
    }
}

