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
	@State private var imageOffset: CGSize = .zero
	@State private var indicatorOpacity: Double = 1.0
	@State private var textTitle: String = "Share."
	
	let hapticFeedback = UINotificationFeedbackGenerator()
	// MARK: - BODY
    var body: some View {
		ZStack {
			Color("ColorBlue")
				.ignoresSafeArea(.all, edges: .all) // ignore safe areas on iphone screen
			VStack(spacing: 20) { // vstack allows its children to be arranged in a vertical line
				// MARK: - HEADER
				Spacer()
				VStack(spacing: 0) {
					Text(textTitle)
						.font(.system(size: 60))
						.fontWeight(.heavy)
						.foregroundColor(.white)
						.transition(.opacity)
						.id(textTitle) // to trigger transitions on textTitle change
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
						.offset(x: imageOffset.width * -1)
						.blur(radius: abs(imageOffset.width / 5))
						.animation(.easeOut(duration: 1), value: imageOffset)
						// more circle group in opposite direction of image
						// otherwise known as a paralax effect
					Image("character-1")
						.resizable()
						.scaledToFit()
						.opacity(isAnimating ? 1 : 0)
						.animation(.easeOut(duration: 0.5), value: isAnimating)
						.offset(x: imageOffset.width * 1.2, y: 0)
						.rotationEffect(.degrees(Double(imageOffset.width / 20)))
						.gesture(DragGesture()
							.onChanged( { gesture in
								if abs(imageOffset.width) <= 150 { // abs returns absolue value of given number
									imageOffset = gesture.translation
									withAnimation(.linear(duration: 0.25)) {
										indicatorOpacity = 0
										textTitle = "Give."
									} // to hide indicator symbol/image on gesture
								}
							})
								.onEnded { _ in
									imageOffset = .zero
									withAnimation(.linear(duration: 0.25)) {
										indicatorOpacity = 1
										textTitle = "Share."
									} // to show indicator after gesture complete
								} // to reset image position on gesture end
						) //: GESTURE
						.animation(.easeOut(duration: 1), value: imageOffset)
					// image eases back to initial point taking 2 seconds to do so
				} //: CENTER
				.overlay(
				Image(systemName: "arrow.left.and.right.circle") // add arrow image to center
					.font(.system(size: 60, weight: .ultraLight))
					.foregroundColor(.white)
					.offset(y: 30) // bring item down a little
					.opacity(isAnimating ? 1 : 0)
					.animation(.easeOut(duration: 1).delay(2), value: isAnimating) // delay render until 2 second after screen load
					.opacity(indicatorOpacity)
				, alignment: .bottom
				)
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
									if gesture.translation.width > 0 && buttonOffset <= buttonWidth - 80 {
										buttonOffset = gesture.translation.width // attempt to ensure that button is never dragged out of container
									}
								}
								.onEnded { _ in
									withAnimation(Animation.easeOut(duration: 0.2)) {
										// run animation when drag ends
										if buttonOffset > buttonWidth/2 { // if user drags circle more than half the width of the container under button, snap circle to right of container and activate home view
											buttonOffset = buttonWidth - 80
											hapticFeedback.notificationOccurred(.success) // haptic feedback to indicate successfully drag
											playSound(sound: "chimeup", type: "mp3") // play chimeup sound on button drag
											isOnboardingViewActive = false
										} else {
											buttonOffset = 0
											hapticFeedback.notificationOccurred(.warning
											) // haptic feedback to indicate failed drag / as warning (only use .error for errors)
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
		.preferredColorScheme(.dark) // tell app that we want this particular view to adhere to the dark color scheme (light pullbar text colors)
	}
}
// MARK: - PREVIEW
struct OnboardingView_Previews: PreviewProvider {
    static var previews: some View {
        OnboardingView()
    }
}

