//
//  ContentView.swift
//  Restart
//
//  Created by Klay Anthony Clarke on 5/3/22.
//

import SwiftUI

struct ContentView: View {
	@AppStorage("onboarding") var isOnboardingViewActive: Bool = true
	
    var body: some View {
		ZStack { // z stack is a container that we can use to display different views atop each other
			if isOnboardingViewActive {
				OnboardingView()
			} else {
				HomeView()
			}
		} //: ZSTACK
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
