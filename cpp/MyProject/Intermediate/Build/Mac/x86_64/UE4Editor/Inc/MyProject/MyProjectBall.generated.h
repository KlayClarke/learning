// Copyright Epic Games, Inc. All Rights Reserved.
/*===========================================================================
	Generated code exported from UnrealHeaderTool.
	DO NOT modify this manually! Edit the corresponding .h files instead!
===========================================================================*/

#include "UObject/ObjectMacros.h"
#include "UObject/ScriptMacros.h"

PRAGMA_DISABLE_DEPRECATION_WARNINGS
#ifdef MYPROJECT_MyProjectBall_generated_h
#error "MyProjectBall.generated.h already included, missing '#pragma once' in MyProjectBall.h"
#endif
#define MYPROJECT_MyProjectBall_generated_h

#define MyProject_Source_MyProject_MyProjectBall_h_12_SPARSE_DATA
#define MyProject_Source_MyProject_MyProjectBall_h_12_RPC_WRAPPERS
#define MyProject_Source_MyProject_MyProjectBall_h_12_RPC_WRAPPERS_NO_PURE_DECLS
#define MyProject_Source_MyProject_MyProjectBall_h_12_INCLASS_NO_PURE_DECLS \
private: \
	static void StaticRegisterNativesAMyProjectBall(); \
	friend struct Z_Construct_UClass_AMyProjectBall_Statics; \
public: \
	DECLARE_CLASS(AMyProjectBall, APawn, COMPILED_IN_FLAGS(0 | CLASS_Config), CASTCLASS_None, TEXT("/Script/MyProject"), NO_API) \
	DECLARE_SERIALIZER(AMyProjectBall)


#define MyProject_Source_MyProject_MyProjectBall_h_12_INCLASS \
private: \
	static void StaticRegisterNativesAMyProjectBall(); \
	friend struct Z_Construct_UClass_AMyProjectBall_Statics; \
public: \
	DECLARE_CLASS(AMyProjectBall, APawn, COMPILED_IN_FLAGS(0 | CLASS_Config), CASTCLASS_None, TEXT("/Script/MyProject"), NO_API) \
	DECLARE_SERIALIZER(AMyProjectBall)


#define MyProject_Source_MyProject_MyProjectBall_h_12_STANDARD_CONSTRUCTORS \
	/** Standard constructor, called after all reflected properties have been initialized */ \
	NO_API AMyProjectBall(const FObjectInitializer& ObjectInitializer); \
	DEFINE_DEFAULT_OBJECT_INITIALIZER_CONSTRUCTOR_CALL(AMyProjectBall) \
	DECLARE_VTABLE_PTR_HELPER_CTOR(NO_API, AMyProjectBall); \
	DEFINE_VTABLE_PTR_HELPER_CTOR_CALLER(AMyProjectBall); \
private: \
	/** Private move- and copy-constructors, should never be used */ \
	NO_API AMyProjectBall(AMyProjectBall&&); \
	NO_API AMyProjectBall(const AMyProjectBall&); \
public:


#define MyProject_Source_MyProject_MyProjectBall_h_12_ENHANCED_CONSTRUCTORS \
private: \
	/** Private move- and copy-constructors, should never be used */ \
	NO_API AMyProjectBall(AMyProjectBall&&); \
	NO_API AMyProjectBall(const AMyProjectBall&); \
public: \
	DECLARE_VTABLE_PTR_HELPER_CTOR(NO_API, AMyProjectBall); \
	DEFINE_VTABLE_PTR_HELPER_CTOR_CALLER(AMyProjectBall); \
	DEFINE_DEFAULT_CONSTRUCTOR_CALL(AMyProjectBall)


#define MyProject_Source_MyProject_MyProjectBall_h_12_PRIVATE_PROPERTY_OFFSET \
	FORCEINLINE static uint32 __PPO__Ball() { return STRUCT_OFFSET(AMyProjectBall, Ball); } \
	FORCEINLINE static uint32 __PPO__SpringArm() { return STRUCT_OFFSET(AMyProjectBall, SpringArm); } \
	FORCEINLINE static uint32 __PPO__Camera() { return STRUCT_OFFSET(AMyProjectBall, Camera); }


#define MyProject_Source_MyProject_MyProjectBall_h_9_PROLOG
#define MyProject_Source_MyProject_MyProjectBall_h_12_GENERATED_BODY_LEGACY \
PRAGMA_DISABLE_DEPRECATION_WARNINGS \
public: \
	MyProject_Source_MyProject_MyProjectBall_h_12_PRIVATE_PROPERTY_OFFSET \
	MyProject_Source_MyProject_MyProjectBall_h_12_SPARSE_DATA \
	MyProject_Source_MyProject_MyProjectBall_h_12_RPC_WRAPPERS \
	MyProject_Source_MyProject_MyProjectBall_h_12_INCLASS \
	MyProject_Source_MyProject_MyProjectBall_h_12_STANDARD_CONSTRUCTORS \
public: \
PRAGMA_ENABLE_DEPRECATION_WARNINGS


#define MyProject_Source_MyProject_MyProjectBall_h_12_GENERATED_BODY \
PRAGMA_DISABLE_DEPRECATION_WARNINGS \
public: \
	MyProject_Source_MyProject_MyProjectBall_h_12_PRIVATE_PROPERTY_OFFSET \
	MyProject_Source_MyProject_MyProjectBall_h_12_SPARSE_DATA \
	MyProject_Source_MyProject_MyProjectBall_h_12_RPC_WRAPPERS_NO_PURE_DECLS \
	MyProject_Source_MyProject_MyProjectBall_h_12_INCLASS_NO_PURE_DECLS \
	MyProject_Source_MyProject_MyProjectBall_h_12_ENHANCED_CONSTRUCTORS \
private: \
PRAGMA_ENABLE_DEPRECATION_WARNINGS


template<> MYPROJECT_API UClass* StaticClass<class AMyProjectBall>();

#undef CURRENT_FILE_ID
#define CURRENT_FILE_ID MyProject_Source_MyProject_MyProjectBall_h


PRAGMA_ENABLE_DEPRECATION_WARNINGS
