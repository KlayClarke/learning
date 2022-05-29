// Copyright Epic Games, Inc. All Rights Reserved.
/*===========================================================================
	Generated code exported from UnrealHeaderTool.
	DO NOT modify this manually! Edit the corresponding .h files instead!
===========================================================================*/

#include "UObject/ObjectMacros.h"
#include "UObject/ScriptMacros.h"

PRAGMA_DISABLE_DEPRECATION_WARNINGS
class UPrimitiveComponent;
class AActor;
struct FVector;
struct FHitResult;
#ifdef FIRSTPERSON_firstPersonProjectile_generated_h
#error "firstPersonProjectile.generated.h already included, missing '#pragma once' in firstPersonProjectile.h"
#endif
#define FIRSTPERSON_firstPersonProjectile_generated_h

#define firstPerson_Source_firstPerson_firstPersonProjectile_h_15_SPARSE_DATA
#define firstPerson_Source_firstPerson_firstPersonProjectile_h_15_RPC_WRAPPERS \
 \
	DECLARE_FUNCTION(execOnHit);


#define firstPerson_Source_firstPerson_firstPersonProjectile_h_15_RPC_WRAPPERS_NO_PURE_DECLS \
 \
	DECLARE_FUNCTION(execOnHit);


#define firstPerson_Source_firstPerson_firstPersonProjectile_h_15_INCLASS_NO_PURE_DECLS \
private: \
	static void StaticRegisterNativesAfirstPersonProjectile(); \
	friend struct Z_Construct_UClass_AfirstPersonProjectile_Statics; \
public: \
	DECLARE_CLASS(AfirstPersonProjectile, AActor, COMPILED_IN_FLAGS(0 | CLASS_Config), CASTCLASS_None, TEXT("/Script/firstPerson"), NO_API) \
	DECLARE_SERIALIZER(AfirstPersonProjectile) \
	static const TCHAR* StaticConfigName() {return TEXT("Game");} \



#define firstPerson_Source_firstPerson_firstPersonProjectile_h_15_INCLASS \
private: \
	static void StaticRegisterNativesAfirstPersonProjectile(); \
	friend struct Z_Construct_UClass_AfirstPersonProjectile_Statics; \
public: \
	DECLARE_CLASS(AfirstPersonProjectile, AActor, COMPILED_IN_FLAGS(0 | CLASS_Config), CASTCLASS_None, TEXT("/Script/firstPerson"), NO_API) \
	DECLARE_SERIALIZER(AfirstPersonProjectile) \
	static const TCHAR* StaticConfigName() {return TEXT("Game");} \



#define firstPerson_Source_firstPerson_firstPersonProjectile_h_15_STANDARD_CONSTRUCTORS \
	/** Standard constructor, called after all reflected properties have been initialized */ \
	NO_API AfirstPersonProjectile(const FObjectInitializer& ObjectInitializer); \
	DEFINE_DEFAULT_OBJECT_INITIALIZER_CONSTRUCTOR_CALL(AfirstPersonProjectile) \
	DECLARE_VTABLE_PTR_HELPER_CTOR(NO_API, AfirstPersonProjectile); \
	DEFINE_VTABLE_PTR_HELPER_CTOR_CALLER(AfirstPersonProjectile); \
private: \
	/** Private move- and copy-constructors, should never be used */ \
	NO_API AfirstPersonProjectile(AfirstPersonProjectile&&); \
	NO_API AfirstPersonProjectile(const AfirstPersonProjectile&); \
public:


#define firstPerson_Source_firstPerson_firstPersonProjectile_h_15_ENHANCED_CONSTRUCTORS \
private: \
	/** Private move- and copy-constructors, should never be used */ \
	NO_API AfirstPersonProjectile(AfirstPersonProjectile&&); \
	NO_API AfirstPersonProjectile(const AfirstPersonProjectile&); \
public: \
	DECLARE_VTABLE_PTR_HELPER_CTOR(NO_API, AfirstPersonProjectile); \
	DEFINE_VTABLE_PTR_HELPER_CTOR_CALLER(AfirstPersonProjectile); \
	DEFINE_DEFAULT_CONSTRUCTOR_CALL(AfirstPersonProjectile)


#define firstPerson_Source_firstPerson_firstPersonProjectile_h_15_PRIVATE_PROPERTY_OFFSET \
	FORCEINLINE static uint32 __PPO__CollisionComp() { return STRUCT_OFFSET(AfirstPersonProjectile, CollisionComp); } \
	FORCEINLINE static uint32 __PPO__ProjectileMovement() { return STRUCT_OFFSET(AfirstPersonProjectile, ProjectileMovement); }


#define firstPerson_Source_firstPerson_firstPersonProjectile_h_12_PROLOG
#define firstPerson_Source_firstPerson_firstPersonProjectile_h_15_GENERATED_BODY_LEGACY \
PRAGMA_DISABLE_DEPRECATION_WARNINGS \
public: \
	firstPerson_Source_firstPerson_firstPersonProjectile_h_15_PRIVATE_PROPERTY_OFFSET \
	firstPerson_Source_firstPerson_firstPersonProjectile_h_15_SPARSE_DATA \
	firstPerson_Source_firstPerson_firstPersonProjectile_h_15_RPC_WRAPPERS \
	firstPerson_Source_firstPerson_firstPersonProjectile_h_15_INCLASS \
	firstPerson_Source_firstPerson_firstPersonProjectile_h_15_STANDARD_CONSTRUCTORS \
public: \
PRAGMA_ENABLE_DEPRECATION_WARNINGS


#define firstPerson_Source_firstPerson_firstPersonProjectile_h_15_GENERATED_BODY \
PRAGMA_DISABLE_DEPRECATION_WARNINGS \
public: \
	firstPerson_Source_firstPerson_firstPersonProjectile_h_15_PRIVATE_PROPERTY_OFFSET \
	firstPerson_Source_firstPerson_firstPersonProjectile_h_15_SPARSE_DATA \
	firstPerson_Source_firstPerson_firstPersonProjectile_h_15_RPC_WRAPPERS_NO_PURE_DECLS \
	firstPerson_Source_firstPerson_firstPersonProjectile_h_15_INCLASS_NO_PURE_DECLS \
	firstPerson_Source_firstPerson_firstPersonProjectile_h_15_ENHANCED_CONSTRUCTORS \
private: \
PRAGMA_ENABLE_DEPRECATION_WARNINGS


template<> FIRSTPERSON_API UClass* StaticClass<class AfirstPersonProjectile>();

#undef CURRENT_FILE_ID
#define CURRENT_FILE_ID firstPerson_Source_firstPerson_firstPersonProjectile_h


PRAGMA_ENABLE_DEPRECATION_WARNINGS
