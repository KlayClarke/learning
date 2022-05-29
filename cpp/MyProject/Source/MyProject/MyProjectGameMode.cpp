// Copyright Epic Games, Inc. All Rights Reserved.

#include "MyProjectGameMode.h"
#include "MyProjectBall.h"

AMyProjectGameMode::AMyProjectGameMode()
{
	// set default pawn class to our ball
	DefaultPawnClass = AMyProjectBall::StaticClass();
}
