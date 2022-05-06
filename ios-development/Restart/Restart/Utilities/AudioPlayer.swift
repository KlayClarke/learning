//
//  AudioPlayer.swift
//  Restart
//
//  Created by Klay Anthony Clarke on 5/6/22.
//

import Foundation
import AVFoundation // full featured framework for working with time-based audio visual media on ios, macos and tvos -- can be used to play, create and edit movies, sound files and build powerful media functionality into any apps using this framework
var audioPlayer: AVAudioPlayer? // an optional "?"

func playSound(sound: String, type: String) { // function with two params
	if let path = Bundle.main.path(forResource: sound, ofType: type) {
		do {
			audioPlayer = try AVAudioPlayer(contentsOf: URL(fileURLWithPath: path))
			audioPlayer?.play()
		} catch {
			print("Could not play the sound file.")
		}
	}
}
