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
	// MARK: - BODY
    var body: some View {
		VStack(spacing: 20) {
			Text("Onboarding")
				.font(.largeTitle)
			Button(action: {
				// deactivate onboarding view on button click
				isOnboardingViewActive = false
			}) {
				Text("Start")
			}
		} //: VSTACK
    }
}

struct OnboardingView_Previews: PreviewProvider {
    static var previews: some View {
        OnboardingView()
    }
}
