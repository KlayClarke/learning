// Copyright Epic Games, Inc. All Rights Reserved.
/*===========================================================================
	Generated code exported from UnrealHeaderTool.
	DO NOT modify this manually! Edit the corresponding .h files instead!
===========================================================================*/

#include "UObject/ObjectMacros.h"
#include "UObject/ScriptMacros.h"

PRAGMA_DISABLE_DEPRECATION_WARNINGS
#ifdef FIRSTPERSON_firstPersonCharacter_generated_h
#error "firstPersonCharacter.generated.h already included, missing '#pragma once' in firstPersonCharacter.h"
#endif
#define FIRSTPERSON_firstPersonCharacter_generated_h

#define firstPerson_Source_firstPerson_firstPersonCharacter_h_20_SPARSE_DATA
#define firstPerson_Source_firstPerson_firstPersonCharacter_h_20_RPC_WRAPPERS
#define firstPerson_Source_firstPerson_firstPersonCharacter_h_20_RPC_WRAPPERS_NO_PURE_DECLS
#define firstPerson_Source_firstPerson_firstPersonCharacter_h_20_INCLASS_NO_PURE_DECLS \
private: \
	static void StaticRegisterNativesAfirstPersonCharacter(); \
	friend struct Z_Construct_UClass_AfirstPersonCharacter_Statics; \
public: \
	DECLARE_CLASS(AfirstPersonCharacter, ACharacter, COMPILED_IN_FLAGS(0 | CLASS_Config), CASTCLASS_None, TEXT("/Script/firstPerson"), NO_API) \
	DECLARE_SERIALIZER(AfirstPersonCharacter)


#define firstPerson_Source_firstPerson_firstPersonCharacter_h_20_INCLASS \
private: \
	static void StaticRegisterNativesAfirstPersonCharacter(); \
	friend struct Z_Construct_UClass_AfirstPersonCharacter_Statics; \
public: \
	DECLARE_CLASS(AfirstPersonCharacter, ACharacter, COMPILED_IN_FLAGS(0 | CLASS_Config), CASTCLASS_None, TEXT("/Script/firstPerson"), NO_API) \
	DECLARE_SERIALIZER(AfirstPersonCharacter)


#define firstPerson_Source_firstPerson_firstPersonCharacter_h_20_STANDARD_CONSTRUCTORS \
	/** Standard constructor, called after all reflected properties have been initialized */ \
	NO_API AfirstPersonCharacter(const FObjectInitializer& ObjectInitializer); \
	DEFINE_DEFAULT_OBJECT_INITIALIZER_CONSTRUCTOR_CALL(AfirstPersonCharacter) \
	DECLARE_VTABLE_PTR_HELPER_CTOR(NO_API, AfirstPersonCharacter); \
	DEFINE_VTABLE_PTR_HELPER_CTOR_CALLER(AfirstPersonCharacter); \
private: \
	/** Private move- and copy-constructors, should never be used */ \
	NO_API AfirstPersonCharacter(AfirstPersonCharacter&&); \
	NO_API AfirstPersonCharacter(const AfirstPersonCharacter&); \
public:


#define firstPerson_Source_firstPerson_firstPersonCharacter_h_20_ENHANCED_CONSTRUCTORS \
private: \
	/** Private move- and copy-constructors, should never be used */ \
	NO_API AfirstPersonCharacter(AfirstPersonCharacter&&); \
	NO_API AfirstPersonCharacter(const AfirstPersonCharacter&); \
public: \
	DECLARE_VTABLE_PTR_HELPER_CTOR(NO_API, AfirstPersonCharacter); \
	DEFINE_VTABLE_PTR_HELPER_CTOR_CALLER(AfirstPersonCharacter); \
	DEFINE_DEFAULT_CONSTRUCTOR_CALL(AfirstPersonCharacter)


#define firstPerson_Source_firstPerson_firstPersonCharacter_h_20_PRIVATE_PROPERTY_OFFSET \
	FORCEINLINE static uint32 __PPO__Mesh1P() { return STRUCT_OFFSET(AfirstPersonCharacter, Mesh1P); } \
	FORCEINLINE static uint32 __PPO__FP_Gun() { return STRUCT_OFFSET(AfirstPersonCharacter, FP_Gun); } \
	FORCEINLINE static uint32 __PPO__FP_MuzzleLocation() { return STRUCT_OFFSET(AfirstPersonCharacter, FP_MuzzleLocation); } \
	FORCEINLINE static uint32 __PPO__VR_Gun() { return STRUCT_OFFSET(AfirstPersonCharacter, VR_Gun); } \
	FORCEINLINE static uint32 __PPO__VR_MuzzleLocation() { return STRUCT_OFFSET(AfirstPersonCharacter, VR_MuzzleLocation); } \
	FORCEINLINE static uint32 __PPO__FirstPersonCameraComponent() { return STRUCT_OFFSET(AfirstPersonCharacter, FirstPersonCameraComponent); } \
	FORCEINLINE static uint32 __PPO__R_MotionController() { return STRUCT_OFFSET(AfirstPersonCharacter, R_MotionController); } \
	FORCEINLINE static uint32 __PPO__L_MotionController() { return STRUCT_OFFSET(AfirstPersonCharacter, L_MotionController); }


#define firstPerson_Source_firstPerson_firstPersonCharacter_h_17_PROLOG
#define firstPerson_Source_firstPerson_firstPersonCharacter_h_20_GENERATED_BODY_LEGACY \
PRAGMA_DISABLE_DEPRECATION_WARNINGS \
public: \
	firstPerson_Source_firstPerson_firstPersonCharacter_h_20_PRIVATE_PROPERTY_OFFSET \
	firstPerson_Source_firstPerson_firstPersonCharacter_h_20_SPARSE_DATA \
	firstPerson_Source_firstPerson_firstPersonCharacter_h_20_RPC_WRAPPERS \
	firstPerson_Source_firstPerson_firstPersonCharacter_h_20_INCLASS \
	firstPerson_Source_firstPerson_firstPersonCharacter_h_20_STANDARD_CONSTRUCTORS \
public: \
PRAGMA_ENABLE_DEPRECATION_WARNINGS


#define firstPerson_Source_firstPerson_firstPersonCharacter_h_20_GENERATED_BODY \
PRAGMA_DISABLE_DEPRECATION_WARNINGS \
public: \
	firstPerson_Source_firstPerson_firstPersonCharacter_h_20_PRIVATE_PROPERTY_OFFSET \
	firstPerson_Source_firstPerson_firstPersonCharacter_h_20_SPARSE_DATA \
	firstPerson_Source_firstPerson_firstPersonCharacter_h_20_RPC_WRAPPERS_NO_PURE_DECLS \
	firstPerson_Source_firstPerson_firstPersonCharacter_h_20_INCLASS_NO_PURE_DECLS \
	firstPerson_Source_firstPerson_firstPersonCharacter_h_20_ENHANCED_CONSTRUCTORS \
private: \
PRAGMA_ENABLE_DEPRECATION_WARNINGS


template<> FIRSTPERSON_API UClass* StaticClass<class AfirstPersonCharacter>();

#undef CURRENT_FILE_ID
#define CURRENT_FILE_ID firstPerson_Source_firstPerson_firstPersonCharacter_h


PRAGMA_ENABLE_DEPRECATION_WARNINGS
