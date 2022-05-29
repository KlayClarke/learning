// Copyright Epic Games, Inc. All Rights Reserved.
/*===========================================================================
	Generated code exported from UnrealHeaderTool.
	DO NOT modify this manually! Edit the corresponding .h files instead!
===========================================================================*/

#include "UObject/GeneratedCppIncludes.h"
#include "firstPerson/firstPersonGameMode.h"
#ifdef _MSC_VER
#pragma warning (push)
#pragma warning (disable : 4883)
#endif
PRAGMA_DISABLE_DEPRECATION_WARNINGS
void EmptyLinkFunctionForGeneratedCodefirstPersonGameMode() {}
// Cross Module References
	FIRSTPERSON_API UClass* Z_Construct_UClass_AfirstPersonGameMode_NoRegister();
	FIRSTPERSON_API UClass* Z_Construct_UClass_AfirstPersonGameMode();
	ENGINE_API UClass* Z_Construct_UClass_AGameModeBase();
	UPackage* Z_Construct_UPackage__Script_firstPerson();
// End Cross Module References
	void AfirstPersonGameMode::StaticRegisterNativesAfirstPersonGameMode()
	{
	}
	UClass* Z_Construct_UClass_AfirstPersonGameMode_NoRegister()
	{
		return AfirstPersonGameMode::StaticClass();
	}
	struct Z_Construct_UClass_AfirstPersonGameMode_Statics
	{
		static UObject* (*const DependentSingletons[])();
#if WITH_METADATA
		static const UE4CodeGen_Private::FMetaDataPairParam Class_MetaDataParams[];
#endif
		static const FCppClassTypeInfoStatic StaticCppClassTypeInfo;
		static const UE4CodeGen_Private::FClassParams ClassParams;
	};
	UObject* (*const Z_Construct_UClass_AfirstPersonGameMode_Statics::DependentSingletons[])() = {
		(UObject* (*)())Z_Construct_UClass_AGameModeBase,
		(UObject* (*)())Z_Construct_UPackage__Script_firstPerson,
	};
#if WITH_METADATA
	const UE4CodeGen_Private::FMetaDataPairParam Z_Construct_UClass_AfirstPersonGameMode_Statics::Class_MetaDataParams[] = {
		{ "HideCategories", "Info Rendering MovementReplication Replication Actor Input Movement Collision Rendering Utilities|Transformation" },
		{ "IncludePath", "firstPersonGameMode.h" },
		{ "ModuleRelativePath", "firstPersonGameMode.h" },
		{ "ShowCategories", "Input|MouseInput Input|TouchInput" },
	};
#endif
	const FCppClassTypeInfoStatic Z_Construct_UClass_AfirstPersonGameMode_Statics::StaticCppClassTypeInfo = {
		TCppClassTypeTraits<AfirstPersonGameMode>::IsAbstract,
	};
	const UE4CodeGen_Private::FClassParams Z_Construct_UClass_AfirstPersonGameMode_Statics::ClassParams = {
		&AfirstPersonGameMode::StaticClass,
		"Game",
		&StaticCppClassTypeInfo,
		DependentSingletons,
		nullptr,
		nullptr,
		nullptr,
		UE_ARRAY_COUNT(DependentSingletons),
		0,
		0,
		0,
		0x008802ACu,
		METADATA_PARAMS(Z_Construct_UClass_AfirstPersonGameMode_Statics::Class_MetaDataParams, UE_ARRAY_COUNT(Z_Construct_UClass_AfirstPersonGameMode_Statics::Class_MetaDataParams))
	};
	UClass* Z_Construct_UClass_AfirstPersonGameMode()
	{
		static UClass* OuterClass = nullptr;
		if (!OuterClass)
		{
			UE4CodeGen_Private::ConstructUClass(OuterClass, Z_Construct_UClass_AfirstPersonGameMode_Statics::ClassParams);
		}
		return OuterClass;
	}
	IMPLEMENT_CLASS(AfirstPersonGameMode, 2716177327);
	template<> FIRSTPERSON_API UClass* StaticClass<AfirstPersonGameMode>()
	{
		return AfirstPersonGameMode::StaticClass();
	}
	static FCompiledInDefer Z_CompiledInDefer_UClass_AfirstPersonGameMode(Z_Construct_UClass_AfirstPersonGameMode, &AfirstPersonGameMode::StaticClass, TEXT("/Script/firstPerson"), TEXT("AfirstPersonGameMode"), false, nullptr, nullptr, nullptr);
	DEFINE_VTABLE_PTR_HELPER_CTOR(AfirstPersonGameMode);
PRAGMA_ENABLE_DEPRECATION_WARNINGS
#ifdef _MSC_VER
#pragma warning (pop)
#endif
