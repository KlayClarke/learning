// Copyright Epic Games, Inc. All Rights Reserved.
/*===========================================================================
	Generated code exported from UnrealHeaderTool.
	DO NOT modify this manually! Edit the corresponding .h files instead!
===========================================================================*/

#include "UObject/GeneratedCppIncludes.h"
#include "firstPerson/firstPersonHUD.h"
#ifdef _MSC_VER
#pragma warning (push)
#pragma warning (disable : 4883)
#endif
PRAGMA_DISABLE_DEPRECATION_WARNINGS
void EmptyLinkFunctionForGeneratedCodefirstPersonHUD() {}
// Cross Module References
	FIRSTPERSON_API UClass* Z_Construct_UClass_AfirstPersonHUD_NoRegister();
	FIRSTPERSON_API UClass* Z_Construct_UClass_AfirstPersonHUD();
	ENGINE_API UClass* Z_Construct_UClass_AHUD();
	UPackage* Z_Construct_UPackage__Script_firstPerson();
// End Cross Module References
	void AfirstPersonHUD::StaticRegisterNativesAfirstPersonHUD()
	{
	}
	UClass* Z_Construct_UClass_AfirstPersonHUD_NoRegister()
	{
		return AfirstPersonHUD::StaticClass();
	}
	struct Z_Construct_UClass_AfirstPersonHUD_Statics
	{
		static UObject* (*const DependentSingletons[])();
#if WITH_METADATA
		static const UE4CodeGen_Private::FMetaDataPairParam Class_MetaDataParams[];
#endif
		static const FCppClassTypeInfoStatic StaticCppClassTypeInfo;
		static const UE4CodeGen_Private::FClassParams ClassParams;
	};
	UObject* (*const Z_Construct_UClass_AfirstPersonHUD_Statics::DependentSingletons[])() = {
		(UObject* (*)())Z_Construct_UClass_AHUD,
		(UObject* (*)())Z_Construct_UPackage__Script_firstPerson,
	};
#if WITH_METADATA
	const UE4CodeGen_Private::FMetaDataPairParam Z_Construct_UClass_AfirstPersonHUD_Statics::Class_MetaDataParams[] = {
		{ "HideCategories", "Rendering Actor Input Replication" },
		{ "IncludePath", "firstPersonHUD.h" },
		{ "ModuleRelativePath", "firstPersonHUD.h" },
		{ "ShowCategories", "Input|MouseInput Input|TouchInput" },
	};
#endif
	const FCppClassTypeInfoStatic Z_Construct_UClass_AfirstPersonHUD_Statics::StaticCppClassTypeInfo = {
		TCppClassTypeTraits<AfirstPersonHUD>::IsAbstract,
	};
	const UE4CodeGen_Private::FClassParams Z_Construct_UClass_AfirstPersonHUD_Statics::ClassParams = {
		&AfirstPersonHUD::StaticClass,
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
		0x008002ACu,
		METADATA_PARAMS(Z_Construct_UClass_AfirstPersonHUD_Statics::Class_MetaDataParams, UE_ARRAY_COUNT(Z_Construct_UClass_AfirstPersonHUD_Statics::Class_MetaDataParams))
	};
	UClass* Z_Construct_UClass_AfirstPersonHUD()
	{
		static UClass* OuterClass = nullptr;
		if (!OuterClass)
		{
			UE4CodeGen_Private::ConstructUClass(OuterClass, Z_Construct_UClass_AfirstPersonHUD_Statics::ClassParams);
		}
		return OuterClass;
	}
	IMPLEMENT_CLASS(AfirstPersonHUD, 4290483819);
	template<> FIRSTPERSON_API UClass* StaticClass<AfirstPersonHUD>()
	{
		return AfirstPersonHUD::StaticClass();
	}
	static FCompiledInDefer Z_CompiledInDefer_UClass_AfirstPersonHUD(Z_Construct_UClass_AfirstPersonHUD, &AfirstPersonHUD::StaticClass, TEXT("/Script/firstPerson"), TEXT("AfirstPersonHUD"), false, nullptr, nullptr, nullptr);
	DEFINE_VTABLE_PTR_HELPER_CTOR(AfirstPersonHUD);
PRAGMA_ENABLE_DEPRECATION_WARNINGS
#ifdef _MSC_VER
#pragma warning (pop)
#endif
