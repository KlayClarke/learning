////
////  OperatorOverloading.cpp
////  HelloWorld
////
////  Created by Klay Anthony Clarke on 5/30/22.
////
//
//#include <iostream>
//
//struct YouTubeChannel {
//	std::string Name;
//	int SubscriberCount;
//	
//	YouTubeChannel(std::string name, int subscriberCount) {
//		Name = name;
//		SubscriberCount = subscriberCount;
//	}
//};
//
//std::ostream& operator<<(std::ostream& COUT, YouTubeChannel& ytChannel) {
//	COUT << "Name: " << ytChannel.Name << std::endl;
//	COUT << "Subscribers: " << ytChannel.SubscriberCount << std::endl;
//	return COUT;
//}
//
//int main()
//{
//	YouTubeChannel yt1=YouTubeChannel("CodeBeauty", 75000);
//	YouTubeChannel yt2=YouTubeChannel("CodeBeauty", 80000);
//	std::cout << yt1 << yt2;
////	or
//	operator<<(std::cout, yt1);
//	std::cin.get();
//}
