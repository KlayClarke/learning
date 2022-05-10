//
//   InfoPanelView.swift
//  Pinch
//
//  Created by Klay Anthony Clarke on 5/10/22.
//

import SwiftUI

struct _InfoPanelView: View {
	var scale: CGFloat
	var offset: CGSize
	@State private var isInfoPanelVisible: Bool = false
	
    var body: some View {
			HStack {
				// MARK: - HOTSPOT
				Image(systemName: "circle.circle")
					.symbolRenderingMode(.hierarchical)
					.resizable()
					.frame(width: 30, height: 30)
					.onLongPressGesture(minimumDuration: 1) {
						withAnimation(.easeOut) {
							isInfoPanelVisible.toggle() // on long press of 1 second, toggle variable value from true to false (vice versa) depending on the variable's current state
						}
					}
				Spacer()
				// MARK: - INFO PANEL
				HStack(spacing: 2) {
					Image(systemName: "arrow.up.left.and.arrow.down.right")
					Text("\(scale)") // placing variables in strings -- in this case, we will be showing the scale calculation in this text
					Spacer()
					Image(systemName: "arrow.left.and.right")
					Text("\(offset.width)") // in this case, we will be showing the offset width calc in this text
					Spacer()
					Image(systemName: "arrow.up.and.down")
					Text("\(offset.height)") // in this case, we will be showing the offset height calc in this text
					Spacer()
				} //: HSTACK
				.font(.footnote)
				.padding(8)
				.background(.ultraThinMaterial)
				.cornerRadius(8)
				.frame(maxWidth: 420)
				.opacity(isInfoPanelVisible ? 1 : 0) // if variable is true, show info panel.. else, don't
				Spacer()
			}
    }
}

struct _InfoPanelView_Previews: PreviewProvider {
    static var previews: some View {
			_InfoPanelView(scale: 1, offset: .zero)
				.preferredColorScheme(.dark)
				.previewLayout(.sizeThatFits)
				.padding()
    }
}
