// Copyright Epic Games, Inc. All Rights Reserved.

#include "firstPersonGameMode.h"
#include "firstPersonHUD.h"
#include "firstPersonCharacter.h"
#include "UObject/ConstructorHelpers.h"

AfirstPersonGameMode::AfirstPersonGameMode()
	: Super()
{
	// set default pawn class to our Blueprinted character
	static ConstructorHelpers::FClassFinder<APawn> PlayerPawnClassFinder(TEXT("/Game/FirstPersonCPP/Blueprints/FirstPersonCharacter"));
	DefaultPawnClass = PlayerPawnClassFinder.Class;

	// use our custom HUD class
	HUDClass = AfirstPersonHUD::StaticClass();
}
