//
//  OperatorOverloading2.cpp
//  HelloWorld
//
//  Created by Klay Anthony Clarke on 5/30/22.
//

#include <iostream>
#include "list"

struct YouTubeChannel {
	std::string Name;
	int SubscriberCount;

	YouTubeChannel(std::string name, int subscriberCount) {
		Name = name;
		SubscriberCount = subscriberCount;
	}
	
	bool operator==(const YouTubeChannel& channel) const {
		return this->Name == channel.Name;
	}
};

std::ostream& operator<<(std::ostream& COUT, YouTubeChannel& ytChannel) {
	COUT << "Name: " << ytChannel.Name << std::endl;
	COUT << "Subscribers: " << ytChannel.SubscriberCount << std::endl;
	return COUT;
}

struct MyCollection {
	std::list<YouTubeChannel>myChannels;
	
	void operator+=(YouTubeChannel& channel) {
		this->myChannels.push_back(channel);
	}
	
	void operator-=(YouTubeChannel& channel) {
		this->myChannels.remove(channel);
	}
};

std::ostream& operator<<(std::ostream& COUT, MyCollection& myCollection) {
	for(YouTubeChannel ytChannel: myCollection.myChannels)
		COUT << ytChannel << std::endl;
	return COUT;
}

int main()
{
	YouTubeChannel yt1=YouTubeChannel("CodeBeauty", 75000);
	YouTubeChannel yt2=YouTubeChannel("CodeBeauty", 80000);
	MyCollection myCollection;
	myCollection += yt1;
	myCollection += yt2;
//	myCollection -= yt2;
	std::cout << myCollection;
	std::cin.get();
}
