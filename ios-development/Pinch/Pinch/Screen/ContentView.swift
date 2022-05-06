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
	
	// MARK: - FUNCTION
	
	// MARK: - CONTENT
	
    var body: some View {
			// MARK: - BODY
			NavigationView {
				ZStack {
					// MARK: - PAGE IMAGE
					Image("magazine-front-cover")
						.resizable()
						.aspectRatio(contentMode: .fit) // add image page (if a user were to click on an image, could send them to this page where they can examine further)
						.cornerRadius(10) // round image corners
						.padding() // padding
						.shadow(color: .black.opacity(0.2), radius: 12, x: 2, y: 2) // add drop shadow to said image
						.opacity(isAnimating ? 1 : 0)
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
									imageScale = 1
								}
							}
						}) // scale in or out on 2 (see "count:" above) taps
				} //: ZSTACK
				.navigationTitle("Pinch & Zoom")
				.navigationBarTitleDisplayMode(.inline)
				.onAppear(perform: {
					withAnimation(.linear(duration: 1)) {
						isAnimating = true
					}
				})
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
