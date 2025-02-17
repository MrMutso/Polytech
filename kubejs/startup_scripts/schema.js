/**
 * KubeJS recipe schemas for use in defining custom recipes.
 */

// These have changed in 1.21, so keep that in mind.
const $RecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.RecipeSchema');
const $ShapedRecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.minecraft.ShapedRecipeSchema');
const $ShapelessRecipeSchema = Java.loadClass("dev.latvian.mods.kubejs.recipe.schema.minecraft.ShapelessRecipeSchema");
const $ItemComponents = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.ItemComponents');
const $FluidComponents = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.FluidComponents');
const $NumberComponent = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.NumberComponent');

StartupEvents.recipeSchemaRegistry(event => {
    // Extended Crafting
    event.register("extendedcrafting:shaped_ender_crafter", new $RecipeSchema(
        $ShapedRecipeSchema.RESULT,
        $ShapedRecipeSchema.PATTERN,
        $ShapedRecipeSchema.KEY,
        $NumberComponent.INT.key("craftingTime").defaultOptional().preferred("craftingTime")
    )
    );
    event.register("extendedcrafting:shapeless_ender_crafter", new $RecipeSchema(
        $ShapelessRecipeSchema.RESULT,
        $ShapelessRecipeSchema.INGREDIENTS,
        $NumberComponent.INT.key("craftingTime").defaultOptional().preferred("craftingTime")
    )
    );
    event.register("extendedcrafting:combination", new $RecipeSchema(
        $ItemComponents.OUTPUT.key("result"),
        $ItemComponents.INPUT.key('input'),
        $ItemComponents.UNWRAPPED_INPUT_ARRAY.key("ingredients"),
        $NumberComponent.INT.key("powerCost").optional(500000).preferred("powerCost"),
        $NumberComponent.INT.key("powerRate").defaultOptional().preferred("powerRate")
    )
    );
    event.register("extendedcrafting:compressor", new $RecipeSchema(
        $ItemComponents.OUTPUT.key("result"),
        $ItemComponents.INPUT.key("catalyst"),
        $ItemComponents.INPUT.key("ingredient"),
        $NumberComponent.INT.key("inputCount"),
        $NumberComponent.INT.key("powerCost").optional(5000000).preferred("powerCost"),
        $NumberComponent.INT.key("powerRate").defaultOptional().preferred("powerRate")
    )
    );
    event.register("extendedcrafting:shaped_flux_crafter", new $RecipeSchema(
        $ShapedRecipeSchema.RESULT,
        $ShapedRecipeSchema.PATTERN,
        $ShapedRecipeSchema.KEY,
        $NumberComponent.INT.key("powerRequired").optional(100000).preferred("powerRequired"),
        $NumberComponent.INT.key("powerRate").defaultOptional().preferred("powerRate")
    )
    );
    event.register('extendedcrafting:shapeless_flux_crafter', new $RecipeSchema(
        $ShapelessRecipeSchema.RESULT,
        $ShapelessRecipeSchema.INGREDIENTS,
        $NumberComponent.INT.key("powerRequired").optional(100000).preferred("powerRequired"),
        $NumberComponent.INT.key("powerRate").defaultOptional().preferred("powerRate")
    )
    );
    event.register("extendedcrafting:shaped_table", new $RecipeSchema(
        $ShapedRecipeSchema.RESULT,
        $ShapedRecipeSchema.PATTERN,
        $ShapedRecipeSchema.KEY,
        $NumberComponent.INT.key("tier").defaultOptional().preferred("tier")
    )
    );
    event.register("extendedcrafting:shapeless_table", new $RecipeSchema(
        $ShapelessRecipeSchema.RESULT,
        $ShapelessRecipeSchema.INGREDIENTS,
        $NumberComponent.INT.key("tier").defaultOptional().preferred("tier")
    )
    );
    event.register("extendedcrafting:shapeless_table", new $RecipeSchema(
        $ShapelessRecipeSchema.RESULT,
        $ShapelessRecipeSchema.INGREDIENTS,
        $NumberComponent.INT.key("tier").defaultOptional().preferred("tier")
    )
    );
    // // Industrial foregoing
    // event.register("industrialforegoing:dissolution_chamber", new $RecipeSchema(
    //     $ItemComponents.OUTPUT.key("output"),
    //     $FluidComponents.OUTPUT.key("outputFluid").allowEmpty(),
    //     $ItemComponents.INPUT_ARRAY.key("input"),
    //     $FluidComponents.INPUT.key("inputFluid"),
    //     $NumberComponent.INT.key("processingtime").defaultOptional().preferred("processingtime")
    // )
    // );
    // Actually Additions
    event.register("actuallyadditions:laser", new $RecipeSchema(
        $ItemComponents.OUTPUT.key("result"),
        $ItemComponents.INPUT.key("ingredient"),
        $NumberComponent.INT.key("energy").defaultOptional().preferred("energy")
    )
    );

    event.register("actuallyadditions:empowering", new $RecipeSchema(
        $ItemComponents.OUTPUT.key("result"),
        $ItemComponents.INPUT.key("base"),
        $ItemComponents.INPUT_ARRAY.key("modifiers"),
        $NumberComponent.INT.key("energy").defaultOptional().preferred("energy"),
        $NumberComponent.INT.key("color").defaultOptional().preferred("color"),
        $NumberComponent.INT.key("time").defaultOptional().preferred("time")
    )
    );
    // Powah
    event.register("powah:energizing", new $RecipeSchema(
        $ItemComponents.OUTPUT.key("result"),
        $ItemComponents.INPUT_ARRAY.key("ingredients"),
        $NumberComponent.INT.key("energy").defaultOptional().preferred("energy")
    )
    );
});