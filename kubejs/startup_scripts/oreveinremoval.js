WorldgenEvents.remove(event => {
    event.removeOres(props => {
      props.worldgenLayer = 'underground_ores';
      props.blocks = [
        "energizedpower:tin_ore",
        "occultism:silver_ore",
        "occultism:silver_ore_deepslate",
        "iceandfire:silver_ore",
        "iceandfire:sapphire_ore",
        "railcraft:lead_ore",
        "railcraft:deepslate_lead_ore",
        "railcraft:nickel_ore",
        "railcraft:deepslate_nickel_ore",
        "railcraft:tin_ore",
        "railcraft:deepslate_tin_ore",
        "railcraft:silver_ore",
        "railcraft:deepslate_silver_ore",
        "railcraft:zinc_ore",
        "railcraft:deepslate_zinc_ore",
      ]
    })
  })