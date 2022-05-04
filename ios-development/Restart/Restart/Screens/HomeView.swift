//
//  HomeView.swift
//  Restart
//
//  Created by Klay Anthony Clarke on 5/3/22.
//

import SwiftUI

struct HomeView: View {
//	MARK: - PROPERTY
	@AppStorage("onboarding") var isOnboardingViewActive: Bool = true
//	MARK: - BODY
    var body: some View {
		VStack(spacing: 20) {
			Text("Home!")
				.font(.largeTitle)
			Button(action: {
				isOnboardingViewActive = true
			}) {
				Text("Restart")
			}
		} //: VSTACK
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
