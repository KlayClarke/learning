//
//  ContentView.swift
//  Pinch
//
//  Created by Klay Anthony Clarke on 5/6/22.
//

import SwiftUI

struct ContentView: View {
	// MARK: - PROPERTY
	@State private var isAnimating: Bool = false
	@State private var imageScale: CGFloat = 1
	@State private var imageOffset: CGSize = .zero // can use .zero if width and height are zero
	
	// MARK: - FUNCTION
	func resetImageState() {
		return withAnimation(.spring()) {
			imageScale = 1
			imageOffset = .zero
		}
	}
	// MARK: - CONTENT
	
    var body: some View {
			// MARK: - BODY
			NavigationView {
				ZStack {
					Color.clear // somehow forces the z stack to use the entire screen height
					// MARK: - PAGE IMAGE
					Image("magazine-front-cover")
						.resizable()
						.aspectRatio(contentMode: .fit) // add image page (if a user were to click on an image, could send them to this page where they can examine further)
						.cornerRadius(10) // round image corners
						.padding() // padding
						.shadow(color: .black.opacity(0.2), radius: 12, x: 2, y: 2) // add drop shadow to said image
						.opacity(isAnimating ? 1 : 0)
						.offset(x: imageOffset.width, y: imageOffset.height)
						.animation(.linear(duration: 1), value: isAnimating)
						.scaleEffect(imageScale)
					// MARK: - 1. TAP GESTURE
						.onTapGesture(count: 2, perform: {
							if imageScale == 1 {
								withAnimation(.spring()) {
									imageScale = 5
								}
							} else {
								withAnimation(.spring()) {
									resetImageState()
								}
							}
						}) // scale in or out on 2 (see "count:" above) taps
					// MARK: - 2. DRAG GESTURE
						.gesture(
						DragGesture()
							.onChanged { value in
								withAnimation(.linear(duration: 1)) {
									imageOffset = value.translation
								}
							} // drag gesture that offsets image by user drag motion offset
							.onEnded { _ in // the underscore tells swift that we do not care about the animation value and to ignore it -- see .onChanged for the opposite
								if imageScale <= 1 {
									resetImageState()
								}
							}
						)
				} //: ZSTACK
				.navigationTitle("Pinch & Zoom")
				.navigationBarTitleDisplayMode(.inline)
				.onAppear(perform: {
					withAnimation(.linear(duration: 1)) {
						isAnimating = true
					}
				})
				// MARK: - INFO PANEL
				.overlay(
					_InfoPanelView(scale: imageScale, offset: imageOffset) // add info panel bar to this page
						.padding(.horizontal)
						.padding(.top, 30)
					, alignment: .top // align it to the top of the z stack
				)
				
				// MARK: - CONTROLS
				.overlay(
					Group { // create group container at bottom of screen
						HStack {
							// SCALE DOWN
							Button {
								withAnimation(.spring()) {
									if imageScale > 1 {
										imageScale -= 1 // decrease image size on click
										if imageScale <= 1 {
											resetImageState() // safety precaution to prevent unwanted glitches
										}
									}
								}
 							} label: {
								ControlImageView(icon: "minus.magnifyingglass")
							} // add "zoom out button"
							// RESET
							Button {
								resetImageState() // reset image state on btuton click
							} label: {
								ControlImageView(icon: "arrow.up.left.and.down.right.magnifyingglass")
							}
							// SCALE UP
							Button {
								withAnimation(.spring()) {
									if imageScale < 5 {
										imageScale += 1
										if imageScale > 5 { // to make sure image never passes 5
											resetImageState()
										}
									}
								}
							} label: {
								ControlImageView(icon: "plus.magnifyingglass")
							}
						} //: CONTROLS
						.padding(EdgeInsets(top: 12, leading: 20, bottom: 12, trailing: 20))
						.background(.ultraThinMaterial)
						.cornerRadius(12)
						.opacity(isAnimating ? 1 : 0) // add animation

					}
						.padding(.bottom, 30)
					, alignment: .bottom
				)
			} //: NAVIGATION
			.navigationViewStyle(.stack)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
			ContentView()
				.preferredColorScheme(.dark)
				
    }
}
