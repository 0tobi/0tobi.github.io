function typeweak() {

    var elem = document.getElementById('type1').src;
    var file = elem.replace(/^.*[\\\/]/, "")
    var elem2 = document.getElementById('type2').src;
    var file2 = elem2.replace(/^.*[\\\/]/, "")
  
  if (file == "Plante.png" && file2 == "Poison.png" || file == "Poison.png" && file2 == "Plante.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.25";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Elec.png" && file2 == "Spectre.png" || file == "Spectre.png" && file2 == "Elec.png" ) {
  
    document.getElementById("norm").innerHTML = "x0";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  } else if (file == "Normal.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  } else if (file == "Fee.png" && file2 == "Glace.png" || file == "Glace.png" && file2 == "Fee.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x2";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x0";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x4";
    document.getElementById("fairy").innerHTML = "x1";
  
  } else if (file == "Psy.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Psy.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x0.25";
    document.getElementById("toxic").innerHTML = "x";  
    document.getElementById("ground").innerHTML = "x0";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x0.5";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  } else if (file == "Feu.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Feu.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.25";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x0";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x4";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  } else if (file == "Normal.png" && file2 == "Psy.png" || file == "Psy.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x0.5";
    document.getElementById("bug").innerHTML = "x2";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  } else if (file == "Spectre.png" && file2 == "Combat.png" || file == "Combat.png" && file2 == "Spectre.png" ) {
  
    document.getElementById("norm").innerHTML = "x0";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x2";
  
  } else if (file == "Acier.png" && file2 == "Psy.png" || file == "Psy.png" && file2 == "Acier.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x0";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x0.25";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x0.5";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  } else if (file == "Insecte.png" && file2 == "Spectre.png" || file == "Spectre.png" && file2 == "Insecte.png" ) {
  
    document.getElementById("norm").innerHTML = "x0";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x0.5";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  } else if (file == "Psy.png" && file2 == "Plante.png" || file == "Plante.png" && file2 == "Psy.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x2";  
    document.getElementById("ground").innerHTML = "x0.5";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x0.5";
    document.getElementById("bug").innerHTML = "x4";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  } else if (file == "Normal.png" && file2 == "Spectre.png" || file == "Spectre.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x0";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  } else if (file == "Eau.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Eau.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x4";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x0";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x1";
  
  } else if (file == "Insecte.png" && file2 == "Combat.png" || file == "Combat.png" && file2 == "Insecte.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x0.5";
    document.getElementById("fly").innerHTML = "x4";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x2";
  
  } else if (file == "Poison.png" && file2 == "Eau.png" || file == "Eau.png" && file2 == "Poison.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  } else if (file == "Plante.png" && file2 == "Eau.png" || file == "Eau.png" && file2 == "Plante.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x0.25";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x2";  
    document.getElementById("ground").innerHTML = "x0.5";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x2";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x1";
  
  } else if (file == "Elec.png" && file2 == "Sol.png" || file == "Sol.png" && file2 == "Elec.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x0";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x1";
  
  } else if (file == "Normal.png" && file2 == "Glace.png" || file == "Glace.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x4";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x1";
  
  } else if (file == "Dragon.png" && file2 == "Dragon.png" || file == "Dragon.png" && file2 == "Dragon.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x2";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x2";
  
  } else if (file == "Poison.png" && file2 == "Glace.png" || file == "Glace.png" && file2 == "Poison.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Eau.png" && file2 == "Tenebres.png" || file == "Tenebres.png" && file2 == "Eau.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x0";
    document.getElementById("bug").innerHTML = "x2";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x0.5";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x2";
  
  }else if (file == "Normal.png" && file2 == "Acier.png" || file == "Acier.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x4";
    document.getElementById("toxic").innerHTML = "x0";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x0.5";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x0.5";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Elec.png" && file2 == "Dragon.png" || file == "Dragon.png" && file2 == "Elec.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x0.25";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x2";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x2";
  
  }else if (file == "Spectre.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Spectre.png" ) {
  
    document.getElementById("norm").innerHTML = "x0";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x0";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x0";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Fee.png" && file2 == "Psy.png" || file == "Psy.png" && file2 == "Fee.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0.25";
    document.getElementById("toxic").innerHTML = "x2";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x0.5";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x0";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Tenebres.png" && file2 == "Poison.png" || file == "Poison.png" && file2 == "Tenebres.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x0";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x0.5";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Elec.png" && file2 == "Psy.png" || file == "Psy.png" && file2 == "Elec.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x0.5";
    document.getElementById("bug").innerHTML = "x2";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Elec.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Elec.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x0";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Sol.png" && file2 == "Plante.png" || file == "Plante.png" && file2 == "Sol.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x0";
    document.getElementById("ice").innerHTML = "x4";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x0.5";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x2";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Roche.png" && file2 == "Sol.png" || file == "Sol.png" && file2 == "Roche.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x4";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x4";
    document.getElementById("electric").innerHTML = "x0";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x0.25";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Eau.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Eau.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x0.25";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x0.25";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.25";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Fee.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Fee.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x0.25";
    document.getElementById("toxic").innerHTML = "x2";  
    document.getElementById("ground").innerHTML = "x0";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x0";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Combat.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Combat.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x0";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x2";
  
  }else if (file == "Glace.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Glace.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.25";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x4";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Elec.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Elec.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x4";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.25";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Insecte.png" && file2 == "Dragon.png" || file == "Dragon.png" && file2 == "Insecte.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.25";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x0.5";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x2";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x2";
  
  }else if (file == "Insecte.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Insecte.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.25";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x0.25";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x0";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x4";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Eau.png" && file2 == "Combat.png" || file == "Combat.png" && file2 == "Eau.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x2";
  
  }else if (file == "Plante.png" && file2 == "Spectre.png" || file == "Spectre.png" && file2 == "Plante.png" ) {
  
    document.getElementById("norm").innerHTML = "x0";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x0";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x0.5";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Elec.png" && file2 == "Eau.png" || file == "Eau.png" && file2 == "Elec.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.25";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Eau.png" && file2 == "Dragon.png" || file == "Dragon.png" && file2 == "Eau.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x0.25";
    document.getElementById("water").innerHTML = "x0.25";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x2";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x2";
  
  }else if (file == "Poison.png" && file2 == "Combat.png" || file == "Combat.png" && file2 == "Poison.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x4";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Roche.png" && file2 == "Poison.png" || file == "Poison.png" && file2 == "Roche.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x0.25";  
    document.getElementById("ground").innerHTML = "x4";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Psy.png" && file2 == "Eau.png" || file == "Eau.png" && file2 == "Psy.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x0.5";
    document.getElementById("bug").innerHTML = "x2";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Fee.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Fee.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x2";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x0";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Combat.png" && file2 == "Acier.png" || file == "Acier.png" && file2 == "Combat.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x0";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x0.25";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x0.5";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Normal.png" && file2 == "Poison.png" || file == "Poison.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Spectre.png" && file2 == "Psy.png" || file == "Psy.png" && file2 == "Spectre.png" ) {
  
    document.getElementById("norm").innerHTML = "x0";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x0.5";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x4";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x4";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Normal.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x2";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x0";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Normal.png" && file2 == "Normal.png" || file == "Normal.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Sol.png" && file2 == "Poison.png" || file == "Poison.png" && file2 == "Sol.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x0";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x0.25";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Elec.png" && file2 == "Acier.png" || file == "Acier.png" && file2 == "Elec.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x0";  
    document.getElementById("ground").innerHTML = "x4";
    document.getElementById("fly").innerHTML = "x0.25";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.25";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Eau.png" && file2 == "Eau.png" || file == "Eau.png" && file2 == "Eau.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Acier.png" && file2 == "Poison.png" || file == "Poison.png" && file2 == "Acier.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x0.25";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x0";  
    document.getElementById("ground").innerHTML = "x4";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x0.5";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x0.25";
  
  }else if (file == "Insecte.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Insecte.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0.25";
    document.getElementById("toxic").innerHTML = "x2";  
    document.getElementById("ground").innerHTML = "x0.5";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x0";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Psy.png" && file2 == "Psy.png" || file == "Psy.png" && file2 == "Psy.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x0.5";
    document.getElementById("bug").innerHTML = "x2";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Normal.png" && file2 == "Eau.png" || file == "Eau.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Acier.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Acier.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x0.25";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.25";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x0";  
    document.getElementById("ground").innerHTML = "x4";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x0.5";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x0.25";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x0.5";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.25";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Poison.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Poison.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0.25";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x0";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Plante.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Plante.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.25";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x4";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x2";  
    document.getElementById("ground").innerHTML = "x0";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Normal.png" && file2 == "Insecte.png" || file == "Insecte.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x0.5";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Roche.png" && file2 == "Eau.png" || file == "Eau.png" && file2 == "Roche.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x4";
    document.getElementById("fire").innerHTML = "x0.25";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  } else if (file == "Roche.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Roche.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x0.25";
    document.getElementById("water").innerHTML = "x4";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x4";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Tenebres.png" && file2 == "Tenebres.png" || file == "Tenebres.png" && file2 == "Tenebres.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x0";
    document.getElementById("bug").innerHTML = "x2";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x0.5";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x2";
  
  }else if (file == "Glace.png" && file2 == "Psy.png" || file == "Psy.png" && file2 == "Glace.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x0.5";
    document.getElementById("bug").innerHTML = "x2";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Psy.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Psy.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x0.5";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Spectre.png" && file2 == "Sol.png" || file == "Sol.png" && file2 == "Spectre.png" ) {
  
    document.getElementById("norm").innerHTML = "x0";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x0";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x0";
    document.getElementById("toxic").innerHTML = "x0.25";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Roche.png" && file2 == "Roche.png" || file == "Roche.png" && file2 == "Roche.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "1x";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Spectre.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Spectre.png" ) {
  
    document.getElementById("norm").innerHTML = "x0";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x0";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Normal.png" && file2 == "Elec.png" || file == "Elec.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Sol.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Sol.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x0";
    document.getElementById("ice").innerHTML = "x4";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x0";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Sol.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Sol.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x4";
    document.getElementById("electric").innerHTML = "x0";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Poison.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Poison.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.25";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x0.25";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x0";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Insecte.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Insecte.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.25";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x4";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Spectre.png" && file2 == "Glace.png" || file == "Glace.png" && file2 == "Spectre.png" ) {
  
    document.getElementById("norm").innerHTML = "x0";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x0";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Insecte.png" && file2 == "Psy.png" || file == "Psy.png" && file2 == "Insecte.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0.25";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x0.5";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x0.5";
    document.getElementById("bug").innerHTML = "x2";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Roche.png" && file2 == "Dragon.png" || file == "Dragon.png" && file2 == "Roche.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x0.25";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x2";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x2";
  
  }else if (file == "Psy.png" && file2 == "Tenebres.png" || file == "Tenebres.png" && file2 == "Psy.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x0";
    document.getElementById("bug").innerHTML = "x4";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x2";
  
  }else if (file == "Sol.png" && file2 == "Eau.png" || file == "Eau.png" && file2 == "Sol.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x4";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x0";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Roche.png" && file2 == "Elec.png" || file == "Elec.png" && file2 == "Roche.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x4";
    document.getElementById("fly").innerHTML = "x0.25";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Normal.png" && file2 == "Combat.png" || file == "Combat.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x2";
  
  }else if (file == "Glace.png" && file2 == "Elec.png" || file == "Elec.png" && file2 == "Glace.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Combat.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Combat.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.25";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Normal.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x0";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Eau.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Eau.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x2";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x0";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Normal.png" && file2 == "Sol.png" || file == "Sol.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x0";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Spectre.png" && file2 == "Eau.png" || file == "Eau.png" && file2 == "Spectre.png" ) {
  
    document.getElementById("norm").innerHTML = "x0";
    document.getElementById("grass").innerHTML = "x2";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x0";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Poison.png" && file2 == "Psy.png" || file == "Psy.png" && file2 == "Poison.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0.25";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x2";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Plante.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Plante.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.25";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x2";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Roche.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Roche.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x2";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x0";
    document.getElementById("fly").innerHTML = "x0.5";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Combat.png" && file2 == "Psy.png" || file == "Psy.png" && file2 == "Combat.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x0.5";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x2";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x2";
  
  }else if (file == "Normal.png" && file2 == "Plante.png" || file == "Plante.png" && file2 == "Normal.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x2";
    document.getElementById("water").innerHTML = "x0.5";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x2";
    document.getElementById("fight").innerHTML = "x2";
    document.getElementById("toxic").innerHTML = "x2";  
    document.getElementById("ground").innerHTML = "x0.5";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x2";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x0";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Insecte.png" && file2 == "Roche.png" || file == "Roche.png" && file2 == "Insecte.png" ) {
  
    document.getElementById("norm").innerHTML = "x0.5";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x0.5";  
    document.getElementById("ground").innerHTML = "x1";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x1";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x2";
    document.getElementById("fairy").innerHTML = "x1";
  
  }else if (file == "Feu.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Feu.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.5";
    document.getElementById("fire").innerHTML = "x0.5";
    document.getElementById("water").innerHTML = "x2";
    document.getElementById("electric").innerHTML = "x1";
    document.getElementById("ice").innerHTML = "x0.5";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x2";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x0.5";
  
  }else if (file == "Plante.png" && file2 == "Dragon.png" || file == "Dragon.png" && file2 == "Plante.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x0.25";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x0.25";
    document.getElementById("electric").innerHTML = "x0.25";
    document.getElementById("ice").innerHTML = "x4";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x2";  
    document.getElementById("ground").innerHTML = "x0.5";
    document.getElementById("fly").innerHTML = "x2";
    document.getElementById("psychic").innerHTML = "x1";
    document.getElementById("bug").innerHTML = "x2";
    document.getElementById("rock").innerHTML = "x1";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x2";
    document.getElementById("dark").innerHTML = "x1";
    document.getElementById("steel").innerHTML = "x1";
    document.getElementById("fairy").innerHTML = "x2";
  
  }else if (file == "Combat.png" && file2 == "Elec.png" || file == "Elec.png" && file2 == "Combat.png" ) {
  
    document.getElementById("norm").innerHTML = "x1";
    document.getElementById("grass").innerHTML = "x1";
    document.getElementById("fire").innerHTML = "x1";
    document.getElementById("water").innerHTML = "x1";
    document.getElementById("electric").innerHTML = "x0.5";
    document.getElementById("ice").innerHTML = "x1";
    document.getElementById("fight").innerHTML = "x1";
    document.getElementById("toxic").innerHTML = "x1";  
    document.getElementById("ground").innerHTML = "x2";
    document.getElementById("fly").innerHTML = "x1";
    document.getElementById("psychic").innerHTML = "x2";
    document.getElementById("bug").innerHTML = "x0.5";
    document.getElementById("rock").innerHTML = "x0.5";
    document.getElementById("ghost").innerHTML = "x1";
    document.getElementById("drake").innerHTML = "x1";
    document.getElementById("dark").innerHTML = "x0.5";
    document.getElementById("steel").innerHTML = "x0.5";
    document.getElementById("fairy").innerHTML = "x2";
  
  }else if (file == "Glace.png" && file2 == "Combat.png" || file == "Combat.png" && file2 == "Glace.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x2";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Acier.png" && file2 == "Dragon.png" || file == "Dragon.png" && file2 == "Acier.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x0";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.25";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Poison.png" && file2 == "Poison.png" || file == "Poison.png" && file2 == "Poison.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x2";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Dragon.png" && file2 == "Tenebres.png" || file == "Tenebres.png" && file2 == "Dragon.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x0.5";
      document.getElementById("drake").innerHTML = "x2";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x4";
    
    }else if (file == "Tenebres.png" && file2 == "Glace.png" || file == "Glace.png" && file2 == "Tenebres.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x4";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x0.5";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Dragon.png" && file2 == "Spectre.png" || file == "Spectre.png" && file2 == "Dragon.png" ) {
  
      document.getElementById("norm").innerHTML = "x0";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x0";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x2";
      document.getElementById("drake").innerHTML = "x2";
      document.getElementById("dark").innerHTML = "x2";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Sol.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Sol.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x2";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x0";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Dragon.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Dragon.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.25";
      document.getElementById("fire").innerHTML = "x0.25";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x2";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Insecte.png" && file2 == "Sol.png" || file == "Sol.png" && file2 == "Insecte.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x0";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x0.5";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Dragon.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Dragon.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x2";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Insecte.png" && file2 == "Eau.png" || file == "Eau.png" && file2 == "Insecte.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x2";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x0.5";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Dragon.png" && file2 == "Psy.png" || file == "Psy.png" && file2 == "Dragon.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x2";
      document.getElementById("drake").innerHTML = "x2";
      document.getElementById("dark").innerHTML = "x2";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Psy.png" && file2 == "Sol.png" || file == "Sol.png" && file2 == "Psy.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x2";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x0";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x2";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x2";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Combat.png" && file2 == "Plante.png" || file == "Plante.png" && file2 == "Combat.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x2";  
      document.getElementById("ground").innerHTML = "x0.5";
      document.getElementById("fly").innerHTML = "x4";
      document.getElementById("psychic").innerHTML = "x2";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Normal.png" && file2 == "Dragon.png" || file == "Dragon.png" && file2 == "Normal.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x0";
      document.getElementById("drake").innerHTML = "x2";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Normal.png" && file2 == "Roche.png" || file == "Roche.png" && file2 == "Normal.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x2";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x4";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x0";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Tenebres.png" && file2 == "Plante.png" || file == "Plante.png" && file2 == "Tenebres.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x2";  
      document.getElementById("ground").innerHTML = "x0.5";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x4";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x0.5";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Tenebres.png" && file2 == "Combat.png" || file == "Combat.png" && file2 == "Tenebres.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x0.5";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x0.25";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x4";
    
    }else if (file == "Glace.png" && file2 == "Sol.png" || file == "Sol.png" && file2 == "Glace.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x0";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Poison.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Poison.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.25";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x4";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x2";
      document.getElementById("bug").innerHTML = "x0.25";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x0.25";
    
    }else if (file == "Plante.png" && file2 == "Elec.png" || file == "Elec.png" && file2 == "Plante.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.25";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x2";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Roche.png" && file2 == "Psy.png" || file == "Psy.png" && file2 == "Roche.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x2";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x2";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x2";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Dragon.png" && file2 == "Combat.png" || file == "Combat.png" && file2 == "Dragon.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x2";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x2";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x4";
    
    }else if (file == "Normal.png" && file2 == "Tenebres.png" || file == "Tenebres.png" && file2 == "Normal.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x4";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x0";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Spectre.png" && file2 == "Poison.png" || file == "Poison.png" && file2 == "Spectre.png" ) {
  
      document.getElementById("norm").innerHTML = "x0";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x0";
      document.getElementById("toxic").innerHTML = "x0.25";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x2";
      document.getElementById("bug").innerHTML = "x0.25";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x2";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x2";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Insecte.png" && file2 == "Elec.png" || file == "Elec.png" && file2 == "Insecte.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Plante.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Plante.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x4";  
      document.getElementById("ground").innerHTML = "x0.5";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Plante.png" && file2 == "Roche.png" || file == "Roche.png" && file2 == "Plante.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Plante.png" && file2 == "Insecte.png" || file == "Insecte.png" && file2 == "Plante.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.25";
      document.getElementById("fire").innerHTML = "x4";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x2";  
      document.getElementById("ground").innerHTML = "x0.25";
      document.getElementById("fly").innerHTML = "x4";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Tenebres.png" && file2 == "Acier.png" || file == "Acier.png" && file2 == "Tenebres.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x4";
      document.getElementById("toxic").innerHTML = "x0";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x0.5";
      document.getElementById("drake").innerHTML = "x0.5";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Eau.png" && file2 == "Acier.png" || file == "Acier.png" && file2 == "Eau.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x2";
      document.getElementById("ice").innerHTML = "x0.25";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x0";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0.5";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.25";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Dragon.png" && file2 == "Poison.png" || file == "Poison.png" && file2 == "Dragon.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.25";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x2";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x2";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Spectre.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Spectre.png" ) {
  
      document.getElementById("norm").innerHTML = "x0";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x0";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x0.25";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x2";
      document.getElementById("drake").innerHTML = "x0";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Tenebres.png" && file2 == "Sol.png" || file == "Sol.png" && file2 == "Tenebres.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x2";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x0";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x0.5";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Eau.png" && file2 == "Glace.png" || file == "Glace.png" && file2 == "Eau.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x2";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x2";
      document.getElementById("ice").innerHTML = "x0.25";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Plante.png" && file2 == "Plante.png" || file == "Plante.png" && file2 == "Plante.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x2";  
      document.getElementById("ground").innerHTML = "x0.5";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Elec.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Elec.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x2";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Tenebres.png" && file2 == "Insecte.png" || file == "Insecte.png" && file2 == "Tenebres.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x0.5";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x0.5";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Tenebres.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Tenebres.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x2";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x0";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x0.5";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Tenebres.png" && file2 == "Feu.png" || file == "Feu.png" && file2 == "Tenebres.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x0.5";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Tenebres.png" && file2 == "Roche.png" || file == "Roche.png" && file2 == "Tenebres.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x2";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x4";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x0.5";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Glace.png" && file2 == "Roche.png" || file == "Roche.png" && file2 == "Glace.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x2";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x4";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x4";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Acier.png" && file2 == "Plante.png" || file == "Plante.png" && file2 == "Acier.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x0.25";
      document.getElementById("fire").innerHTML = "x4";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x0";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0.5";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Insecte.png" && file2 == "Poison.png" || file == "Poison.png" && file2 == "Insecte.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.25";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x0.25";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x2";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Fee.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Fee.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x2";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Dragon.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Dragon.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.25";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x4";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x0";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x2";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Roche.png" && file2 == "Combat.png" || file == "Combat.png" && file2 == "Roche.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x2";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x2";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0.5";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Spectre.png" && file2 == "Roche.png" || file == "Roche.png" && file2 == "Spectre.png" ) {
  
      document.getElementById("norm").innerHTML = "x0";
      document.getElementById("grass").innerHTML = "x2";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x0";
      document.getElementById("toxic").innerHTML = "x0.25";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x2";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x2";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Poison.png" && file2 == "Elec.png" || file == "Elec.png" && file2 == "Poison.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x4";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x2";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Elec.png" && file2 == "Elec.png" || file == "Elec.png" && file2 == "Elec.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Sol.png" && file2 == "Combat.png" || file == "Combat.png" && file2 == "Sol.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x2";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x0";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x2";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x0.25";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Insecte.png" && file2 == "Insecte.png" || file == "Insecte.png" && file2 == "Insecte.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x";  
      document.getElementById("ground").innerHTML = "x0.5";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Glace.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Glace.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x2";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x0";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x4";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Sol.png" && file2 == "Dragon.png" || file == "Dragon.png" && file2 == "Sol.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x0";
      document.getElementById("ice").innerHTML = "x4";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x2";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Tenebres.png" && file2 == "Elec.png" || file == "Elec.png" && file2 == "Tenebres.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x0.5";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Insecte.png" && file2 == "Acier.png" || file == "Acier.png" && file2 == "Insecte.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x0.25";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x0";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0.5";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Vol.png" && file2 == "Acier.png" || file == "Acier.png" && file2 == "Vol.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x0.25";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x2";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x0";  
      document.getElementById("ground").innerHTML = "x0";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x0.25";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0.5";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Acier.png" && file2 == "Acier.png" || file == "Acier.png" && file2 == "Acier.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x0";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0.5";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Glace.png" && file2 == "Insecte.png" || file == "Insecte.png" && file2 == "Glace.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x4";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x0.5";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x4";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Vol.png" && file2 == "Vol.png" || file == "Vol.png" && file2 == "Vol.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x2";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x0";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Glace.png" && file2 == "Acier.png" || file == "Acier.png" && file2 == "Glace.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x4";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.25";
      document.getElementById("fight").innerHTML = "x4";
      document.getElementById("toxic").innerHTML = "x0";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0.5";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Combat.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Combat.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x0.5";
      document.getElementById("toxic").innerHTML = "x2";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x2";
      document.getElementById("bug").innerHTML = "x0.25";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0";
      document.getElementById("dark").innerHTML = "x0.25";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Combat.png" && file2 == "Combat.png" || file == "Combat.png" && file2 == "Combat.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x2";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Acier.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Acier.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x0";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x0.25";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Roche.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Roche.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x2";
      document.getElementById("fire").innerHTML = "x0.5";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0";
      document.getElementById("dark").innerHTML = "x0.5";
      document.getElementById("steel").innerHTML = "x4";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Dragon.png" && file2 == "Glace.png" || file == "Glace.png" && file2 == "Dragon.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x1";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x2";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Tenebres.png" && file2 == "Fee.png" || file == "Fee.png" && file2 == "Tenebres.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x2";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x0.25";
      document.getElementById("drake").innerHTML = "x0";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else if (file == "Acier.png" && file2 == "Sol.png" || file == "Sol.png" && file2 == "Acier.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.5";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x0";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x0";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x0.25";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0.5";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Glace.png" && file2 == "Plante.png" || file == "Plante.png" && file2 == "Glace.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x4";
      document.getElementById("water").innerHTML = "x0.5";
      document.getElementById("electric").innerHTML = "x0.5";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x2";
      document.getElementById("toxic").innerHTML = "x2";  
      document.getElementById("ground").innerHTML = "x0.5";
      document.getElementById("fly").innerHTML = "x2";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x2";
      document.getElementById("rock").innerHTML = "x2";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x2";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Acier.png" && file2 == "Roche.png" || file == "Roche.png" && file2 == "Acier.png" ) {
  
      document.getElementById("norm").innerHTML = "x0.25";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x4";
      document.getElementById("toxic").innerHTML = "x0";  
      document.getElementById("ground").innerHTML = "x4";
      document.getElementById("fly").innerHTML = "x0.25";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x0.5";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Sol.png" && file2 == "Sol.png" || file == "Sol.png" && file2 == "Sol.png" ) {
  
      document.getElementById("norm").innerHTML = "x1";
      document.getElementById("grass").innerHTML = "x2";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x2";
      document.getElementById("electric").innerHTML = "x0";
      document.getElementById("ice").innerHTML = "x2";
      document.getElementById("fight").innerHTML = "x1";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Spectre.png" && file2 == "Spectre.png" || file == "Spectre.png" && file2 == "Spectre.png" ) {
  
      document.getElementById("norm").innerHTML = "x0";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x0";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x1";
      document.getElementById("bug").innerHTML = "x0.5";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x2";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x2";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x1";
    
    }else if (file == "Acier.png" && file2 == "Spectre.png" || file == "Spectre.png" && file2 == "Acier.png" ) {
  
      document.getElementById("norm").innerHTML = "x0";
      document.getElementById("grass").innerHTML = "x0.5";
      document.getElementById("fire").innerHTML = "x2";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x0.5";
      document.getElementById("fight").innerHTML = "x0";
      document.getElementById("toxic").innerHTML = "x0";  
      document.getElementById("ground").innerHTML = "x2";
      document.getElementById("fly").innerHTML = "x0.5";
      document.getElementById("psychic").innerHTML = "x0.5";
      document.getElementById("bug").innerHTML = "x0.25";
      document.getElementById("rock").innerHTML = "x0.5";
      document.getElementById("ghost").innerHTML = "x2";
      document.getElementById("drake").innerHTML = "x0.5";
      document.getElementById("dark").innerHTML = "x2";
      document.getElementById("steel").innerHTML = "x0.5";
      document.getElementById("fairy").innerHTML = "x0.5";
    
    }else if (file == "Tenebres.png" && file2 == "Spectre.png" || file == "Spectre.png" && file2 == "Tenebres.png" ) {
  
      document.getElementById("norm").innerHTML = "x0";
      document.getElementById("grass").innerHTML = "x1";
      document.getElementById("fire").innerHTML = "x1";
      document.getElementById("water").innerHTML = "x1";
      document.getElementById("electric").innerHTML = "x1";
      document.getElementById("ice").innerHTML = "x1";
      document.getElementById("fight").innerHTML = "x0";
      document.getElementById("toxic").innerHTML = "x0.5";  
      document.getElementById("ground").innerHTML = "x1";
      document.getElementById("fly").innerHTML = "x1";
      document.getElementById("psychic").innerHTML = "x0";
      document.getElementById("bug").innerHTML = "x1";
      document.getElementById("rock").innerHTML = "x1";
      document.getElementById("ghost").innerHTML = "x1";
      document.getElementById("drake").innerHTML = "x1";
      document.getElementById("dark").innerHTML = "x1";
      document.getElementById("steel").innerHTML = "x1";
      document.getElementById("fairy").innerHTML = "x2";
    
    }else {
  
      document.getElementById("norm").innerHTML = "rien";
      document.getElementById("grass").innerHTML = "rien";
      document.getElementById("fire").innerHTML = "rien";
      document.getElementById("water").innerHTML = "rien";
      document.getElementById("electric").innerHTML = "rien";
      document.getElementById("ice").innerHTML = "rien";
      document.getElementById("fight").innerHTML = "rien";
      document.getElementById("toxic").innerHTML = "rien";  
      document.getElementById("ground").innerHTML = "rien";
      document.getElementById("fly").innerHTML = "rien";
      document.getElementById("psychic").innerHTML = "rien";
      document.getElementById("bug").innerHTML = "rien";
      document.getElementById("rock").innerHTML = "rien";
      document.getElementById("ghost").innerHTML = "rien";
      document.getElementById("drake").innerHTML = "rien";
      document.getElementById("dark").innerHTML = "rien";
      document.getElementById("steel").innerHTML = "rien";
      document.getElementById("fairy").innerHTML = "rien";
    
    }
  
  
  }

// Icon 1

function iconAlola1() {

  var alolapic2 = document.getElementById("pic1").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(/.png|g.png/, "a.png");
  var alolares5 = alolares4.replace(/.png|a.png|g.png/, "a.png");
  document.getElementById("pic1").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("alola").innerHTML = "Alolan ";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1-alola").style.display = "none";
  document.getElementById("icon1").style.display = "block";

  if (alolares3 === "19a.png") {
        document.getElementById("type1").src = "../types/" + "Tenebres.png";
        document.getElementById("select1").value = "19a";
      } else if (alolares3 === "50a.png") {
        document.getElementById("type1").src = "../types/" + "Sol.png";
        document.getElementById("select1").value = "50a";
      } else if (alolares3 === "103a.png") {
        document.getElementById("type1").src = "../types/" + "Plante.png";
        document.getElementById("select1").value = "103a";
      } else if (alolares3 === "75a.png") {
        document.getElementById("type1").src = "../types/" + "Roche.png";
        document.getElementById("select1").value = "75a";
      } else if (alolares3 === "76a.png") {
        document.getElementById("type1").src = "../types/" + "Roche.png";
        document.getElementById("select1").value = "76a";
      } else if (alolares3 === "74a.png") {
        document.getElementById("type1").src = "../types/" + "Roche.png";
        document.getElementById("select1").value = "74a";
      } else if (alolares3 === "38a.png") {
        document.getElementById("type1").src = "../types/" + "Glace.png";
        document.getElementById("select1").value = "38a";
      } else if (alolares3 === "53a.png") {
        document.getElementById("type1").src = "../types/" + "Tenebres.png";
        document.getElementById("select1").value = "53a";
      } else if (alolares3 === "28a.png") {
        document.getElementById("type1").src = "../types/" + "Glace.png";
        document.getElementById("select1").value = "28a";
      } else if (alolares3 === "105a.png") {
        document.getElementById("type1").src = "../types/" + "Spectre.png";
        document.getElementById("select1").value = "105a";
      } else if (alolares3 === "37a.png") {
        document.getElementById("type1").src = "../types/" + "Glace.png";
        document.getElementById("select1").value = "37a";
      } else if (alolares3 === "20a.png") {
        document.getElementById("type1").src = "../types/" + "Tenebres.png";
        document.getElementById("select1").value = "20a";
      } else if (alolares3 === "27a.png") {
        document.getElementById("type1").src = "../types/" + "Glace.png";
        document.getElementById("select1").value = "27a";
      } else if (alolares3 === "52a.png") {
        document.getElementById("type1").src = "../types/" + "Tenebres.png";
        document.getElementById("select1").value = "52a";
      } else if (alolares3 === "88a.png") {
        document.getElementById("select1").value = "88a";
      } else if (alolares3 === "89a.png") {
        document.getElementById("select1").value = "89a";
      } else if (alolares3 === "51a.png") {
        document.getElementById("type1").src = "../types/" + "Sol.png";
        document.getElementById("select1").value = "51a";
      } else if (alolares3 === "26a.png") {
        document.getElementById("type1").src = "../types/" + "Elec.png";
        document.getElementById("select1").value = "26a";
      }
    typeweak();

}

function iconAlolaMiaouss() {

  var alolapic2 = document.getElementById("pic1").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(/.png|g.png/, "a.png");
  var alolares5 = alolares4.replace(/.png|a.png|g.png/, "a.png");
  document.getElementById("pic1").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("alola").innerHTML = "Alolan ";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1-alola1").style.display = "none";
  document.getElementById("icon1-galar1").style.display = "none";
  document.getElementById("icon1-gigan").style.display = "none";
  document.getElementById("icon1").style.display = "block";

  if (alolares3 === "52a.png") {
        document.getElementById("type1").src = "../types/" + "Tenebres.png";
        document.getElementById("select1").value = "52a";
      }
    typeweak();

}

function iconNormal1() {

  var test3 = document.getElementById("pic1").src;
    var test5 = document.getElementById("pic3").src;
    var res5 = test3.substr(32);
    var res9 = test5.substr(66);
    var res7 = res5.replace(/a.png|m.png|g.png|mx.png|my.png|_1.png|_2.png|g_2.png|_3.png|_4.png|_5.png/, ".png");
    var res10 = res9.replace(/a.png|m.png|g.png|mx.png|my.png|_1.png|_2.png|g_2.png|_3.png|_4.png|_5.png/, ".png");
  document.getElementById("pic1").src = "../sprites/" + res7;
  document.getElementById("pic3").src = "../sprites/fused/" + res10;
  document.getElementById("select1").value = res7;
  document.getElementById("alola").innerHTML = "";
  document.getElementById("megaoui").innerHTML = "";
  document.getElementById("galar").innerHTML = "";
  document.getElementById("megaouixy").innerHTML = "";
  document.getElementById("Gigantamax").innerHTML = "";
  document.getElementById("select1").disabled = false;
  document.getElementById("select2").disabled = false;
  document.getElementById("icon1").style.display = "none";
  var iconalola1 = document.getElementById("icon1-alola").src;
  var iconalolares1 = iconalola1.substr(58);
  var iconmega1 = document.getElementById("icon1-mega").src;
  var iconmegares1 = iconmega1.substr(58);
  var icongalar1 = document.getElementById("icon1-galar").src;
  var icongalarres1 = icongalar1.substr(58);
  var iconmegax1 = document.getElementById("icon1-megax").src;
  var iconmegaxres1 = iconmegax1.substr(58);
  var iconmegay1 = document.getElementById("icon1-megay").src;
  var iconmegayres1 = iconmegay1.substr(58);
  var icon1galar1 = document.getElementById("icon1-galar1").src;
  var icon1galarres1 = icon1galar1.substr(58);
  var icon1alola1 = document.getElementById("icon1-alola1").src;
  var icon1alolares1 = icon1alola1.substr(58);
  var icongigan1 = document.getElementById("icon1-gigan").src;
  var icongiganres1 = icongigan1.substr(58);
  var iconaltform1 = document.getElementById("icon1-altform").src;
  var iconaltformres1 = iconaltform1.substr(58);
  var iconaltform2 = document.getElementById("icon1-altform2").src;
  var iconaltform2res1 = iconaltform2.substr(58);
  var iconaltgalarform2 = document.getElementById("icon1-altgalarform2").src;
  var iconaltgalarform2res1 = iconaltgalarform2.substr(58);
  var iconaltform3 = document.getElementById("icon1-altform3").src;
  var iconaltform3res1 = iconaltform3.substr(58);
  var iconaltform4 = document.getElementById("icon1-altform4").src;
  var iconaltform4res1 = iconaltform4.substr(58);
  var iconaltform5 = document.getElementById("icon1-altform5").src;
  var iconaltform5res1 = iconaltform5.substr(58);
  document.getElementById("icon1-mega").src = "../icons/" + iconmegares1;
  document.getElementById("icon1-alola").src = "../icons/" + iconalolares1;
  document.getElementById("icon1-galar").src = "../icons/" + icongalarres1;
  document.getElementById("icon1-megax").src = "../icons/" + iconmegaxres1;
  document.getElementById("icon1-megay").src = "../icons/" + iconmegayres1;
  document.getElementById("icon1-alola1").src = "../icons/" + icon1alolares1;
  document.getElementById("icon1-galar1").src = "../icons/" + icon1galarres1;
  document.getElementById("icon1-gigan").src = "../icons/" + icongiganres1;
  document.getElementById("icon1-altform").src = "../icons/" + iconaltformres1;
  document.getElementById("icon1-altform2").src = "../icons/" + iconaltform2res1;
  document.getElementById("icon1-altgalarform2").src = "../icons/" + iconaltgalarform2res1;
  document.getElementById("icon1-altform3").src = "../icons/" + iconaltform3res1;
  document.getElementById("icon1-altform4").src = "../icons/" + iconaltform4res1;
  document.getElementById("icon1-altform5").src = "../icons/" + iconaltform5res1;

if (iconalolares1 == "19a.png" || iconalolares1 == "20a.png" || iconalolares1 == "26a.png" || iconalolares1 == "27a.png" || iconalolares1 == "28a.png" || iconalolares1 == "37a.png" || iconalolares1 == "38a.png" || iconalolares1 == "50a.png" || iconalolares1 == "51a.png" || iconalolares1 == "53a.png" || iconalolares1 == "74a.png" || iconalolares1 == "75a.png" || iconalolares1 == "76a.png" || iconalolares1 == "88a.png" || iconalolares1 == "89a.png" || iconalolares1 == "103a.png" || iconalolares1 == "105a.png") {
 
  
  document.getElementById("icon1-alola").style.display = "block";

   if (res7 === "19.png") {
    document.getElementById("type1").src = "../types/" + "Normal.png";
    document.getElementById("select1").value = "19";
  } else if (res7 === "50.png") {
    document.getElementById("type1").src = "../types/" + "Sol.png";
    document.getElementById("select1").value = "50";
  } else if (res7 === "103.png") {
    document.getElementById("type1").src = "../types/" + "Plante.png";
    document.getElementById("select1").value = "103";
  } else if (res7 === "75.png") {
    document.getElementById("type1").src = "../types/" + "Roche.png";
    document.getElementById("select1").value = "75";
  } else if (res7 === "74.png") {
    document.getElementById("type1").src = "../types/" + "Roche.png";
    document.getElementById("select1").value = "74";
  } else if (res7 === "38.png") {
    document.getElementById("type1").src = "../types/" + "Feu.png";
    document.getElementById("select1").value = "38";
  } else if (res7 === "53.png") {
    document.getElementById("type1").src = "../types/" + "Normal.png";
    document.getElementById("select1").value = "53";
  } else if (res7 === "28.png") {
    document.getElementById("type1").src = "../types/" + "Sol.png";
    document.getElementById("select1").value = "28";
  } else if (res7 === "105.png") {
    document.getElementById("type1").src = "../types/" + "Sol.png";
    document.getElementById("select1").value = "105";
  } else if (res7 === "37.png") {
    document.getElementById("type1").src = "../types/" + "Feu.png";
    document.getElementById("select1").value = "37";
  } else if (res7 === "20.png") {
    document.getElementById("type1").src = "../types/" + "Normal.png";
    document.getElementById("select1").value = "20";
  } else if (res7 === "27.png") {
    document.getElementById("type1").src = "../types/" + "Sol.png";
    document.getElementById("select1").value = "27";
  } else if (res7 === "26.png") {
    document.getElementById("type1").src = "../types/" + "Elec.png";
    document.getElementById("select1").value = "26";
  } else if (res7 === "76.png") {
    document.getElementById("type1").src = "../types/" + "Roche.png";
    document.getElementById("select1").value = "76";
  } else if (res7 === "51.png") {
    document.getElementById("select1").value = "51";
  } else if (res7 === "88.png") {
    document.getElementById("select1").value = "88";
  } else if (res7 === "89.png") {
    document.getElementById("select1").value = "89";
  }
  typeweak();
}
if (iconmegares1 == "3m.png" || iconmegares1 == "9m.png" || iconmegares1 == "15m.png" || iconmegares1 == "18m.png" || iconmegares1 == "65m.png" || iconmegares1 == "80m.png" || iconmegares1 == "94m.png" || iconmegares1 == "115m.png" || iconmegares1 == "127m.png" || iconmegares1 == "130m.png" || iconmegares1 == "142m.png" || iconmegares1 == "181m.png" || iconmegares1 == "208m.png" || iconmegares1 == "212m.png" || iconmegares1 == "214m.png" || iconmegares1 == "229m.png" || iconmegares1 == "248m.png" || iconmegares1 == "254m.png" || iconmegares1 == "257m.png" || iconmegares1 == "260m.png" || iconmegares1 == "282m.png" || iconmegares1 == "302m.png" || iconmegares1 == "303m.png" || iconmegares1 == "306m.png" || iconmegares1 == "308m.png" || iconmegares1 == "310m.png" || iconmegares1 == "319m.png" || iconmegares1 == "323m.png" || iconmegares1 == "334m.png" || iconmegares1 == "354m.png" || iconmegares1 == "359m.png" || iconmegares1 == "362m.png" || iconmegares1 == "373m.png" || iconmegares1 == "376m.png" || iconmegares1 == "380m.png" || iconmegares1 == "381m.png" || iconmegares1 == "382m.png" || iconmegares1 == "383m.png" || iconmegares1 == "384m.png" || iconmegares1 == "428m.png" || iconmegares1 == "445m.png" || iconmegares1 == "448m.png" || iconmegares1 == "460m.png" || iconmegares1 == "475m.png" || iconmegares1 == "531m.png" || iconmegares1 == "719m.png" ) {

document.getElementById("icon1-mega").style.display = "block";

    if (res7 === "383.png") {

      document.getElementById("select1").value = "383";


  } else if (res7 === "130.png") {
    document.getElementById("select1").value = "130";
  } else if (res7 === "359.png") {

    document.getElementById("select1").value = "359";

  } else if (res7 === "3.png") {

    document.getElementById("select1").value = "3";

  } else if (res7 === "15.png") {

    document.getElementById("select1").value = "15";

  } else if (res7 === "115.png") {

    document.getElementById("select1").value = "115";

  } else if (res7 === "142.png") {

    document.getElementById("select1").value = "142";

  } else if (res7 === "381.png") {

    document.getElementById("select1").value = "381";

  } else if (res7 === "380.png") {

    document.getElementById("select1").value = "380";

  } else if (res7 === "80.png") {

    document.getElementById("select1").value = "80";

  } else if (res7 === "719.png") {

    document.getElementById("select1").value = "719";

  } else if (res7 === "254.png") {

    document.getElementById("select1").value = "254";

  } else if (res7 === "448.png") {

    document.getElementById("select1").value = "448";

  } else if (res7 === "229.png") {

    document.getElementById("select1").value = "229";

  } else if (res7 === "303.png") {

    document.getElementById("select1").value = "303";

  } else if (res7 === "65.png") {

    document.getElementById("select1").value = "65";

  } else if (res7 === "384.png") {

    document.getElementById("select1").value = "384";

  } else if (res7 === "382.png") {

    document.getElementById("select1").value = "382";
    document.getElementById("megaoui").innerHTML = "";
  } else if (res7 === "282.png") {
    document.getElementById("select1").value = "282";
  } else if (res7 === "362.png") {

    document.getElementById("select1").value = "362";
  } else if (res7 === "248.png") {

    document.getElementById("select1").value = "248";
  } else if (res7 === "475.png") {

    document.getElementById("select1").value = "475";
  } else if (res7 === "214.png") {

    document.getElementById("select1").value = "214";
  } else if (res7 === "94.png") {

    document.getElementById("select1").value = "94";
  } else if (res7 === "181.png") {

    document.getElementById("select1").value = "181";
  } else if (res7 === "127.png") {

    document.getElementById("select1").value = "127";
  } else if (res7 === "9.png") {

    document.getElementById("select1").value = "9";
  } else if (res7 === "257.png") {

    document.getElementById("select1").value = "257";
  } else if (res7 === "531.png") {

    document.getElementById("select1").value = "531";
  } else if (res7 === "208.png") {

    document.getElementById("select1").value = "208";
  } else if (res7 === "323.png") {

    document.getElementById("select1").value = "323";
  } else if (res7 === "354.png") {

    document.getElementById("select1").value = "354";

  } else if (res7 === "260.png") {

    document.getElementById("select1").value = "260";
  } else if (res7 === "319.png") {

    document.getElementById("select1").value = "319";
  } else if (res7 === "302.png") {

    document.getElementById("select1").value = "302";
  } else if (res7 === "373.png") {

    document.getElementById("select1").value = "373";
  } else if (res7 === "445.png") {

    document.getElementById("select1").value = "445";
  } else if (res7 === "212.png") {

    document.getElementById("select1").value = "212";
  } else if (res7 === "376.png") {

    document.getElementById("select1").value = "376";
  } else if (res7 === "428.png") {

    document.getElementById("select1").value = "428";
  } else if (res7 === "334.png") {

    document.getElementById("select1").value = "334";
  }


  typeweak();
}
if (icongalarres1 == "144g.png" || icongalarres1 == "145g.png" || icongalarres1 == "146g.png" || icongalarres1 == "79g.png" || icongalarres1 == "80g.png" || icongalarres1 == "199g.png" || icongalarres1 == "618g.png" || icongalarres1 == "562g.png" || icongalarres1 == "555g.png" || icongalarres1 == "554g.png" || icongalarres1 == "77g.png" || icongalarres1 == "78g.png" || icongalarres1 == "83g.png" || icongalarres1 == "110g.png" || icongalarres1 == "122g.png" || icongalarres1 == "222g.png" || icongalarres1 == "263g.png" || icongalarres1 == "264g.png" || icongalarres1 == "554g.png" || icongalarres1 == "555g.png" || icongalarres1 == "562g.png" || icongalarres1 == "618g.png") {

 document.getElementById("icon1-galar").style.display = "block";

  if (res7 === "77.png") {
  document.getElementById("type1").src = "../types/" + "Feu.png";
  document.getElementById("select1").value = "77";
} else if (res7 === "110.png") {
  document.getElementById("type1").src = "../types/" + "Poison.png";
  document.getElementById("select1").value = "110";
} else if (res7 === "554.png") {
  document.getElementById("type1").src = "../types/" + "Feu.png";
  document.getElementById("select1").value = "554";
} else if (res7 === "555.png") {
  document.getElementById("type1").src = "../types/" + "Feu.png";
  document.getElementById("select1").value = "555";
} else if (res7 === "83.png") {
  document.getElementById("type1").src = "../types/" + "Normal.png";
  document.getElementById("select1").value = "83";
} else if (res7 === "78.png") {
  document.getElementById("type1").src = "../types/" + "Feu.png";
  document.getElementById("select1").value = "78";
} else if (res7 === "122.png") {
  document.getElementById("type1").src = "../types/" + "Psy.png";
  document.getElementById("select1").value = "122";
} else if (res7 === "222.png") {
  document.getElementById("type1").src = "../types/" + "Eau.png";
  document.getElementById("select1").value = "222";
} else if (res7 === "263.png") {
  document.getElementById("type1").src = "../types/" + "Normal.png";
  document.getElementById("select1").value = "263";
} else if (res7 === "264.png") {
  document.getElementById("type1").src = "../types/" + "Normal.png";
  document.getElementById("select1").value = "264";
} else if (res7 === "562.png") {
  document.getElementById("type1").src = "../types/" + "Spectre.png";
  document.getElementById("select1").value = "562";
} else if (res7 === "618.png") {

  document.getElementById("select1").value = "618";
} else if (res7 === "79.png") {
  document.getElementById("type1").src = "../types/" + "Eau.png";
  document.getElementById("select1").value = "79";
} else if (res7 === "80.png") {
  document.getElementById("type1").src = "../types/" + "Eau.png";
  document.getElementById("select1").value = "80";
} else if (res7 === "199.png") {
  document.getElementById("type1").src = "../types/" + "Eau.png";
  document.getElementById("select1").value = "199";
} else if (res7 === "144.png") {
  document.getElementById("type1").src = "../types/" + "Glace.png";
  document.getElementById("select1").value = "144";
} else if (res7 === "145.png") {
  document.getElementById("type1").src = "../types/" + "Elec.png";
  document.getElementById("select1").value = "145";
} else if (res7 === "146.png") {
  document.getElementById("type1").src = "../types/" + "Feu.png";
  document.getElementById("select1").value = "146";
}
typeweak();
}
if (iconmegaxres1 == "6mx.png" || iconmegaxres1 == "150mx.png") {

  document.getElementById("icon1-megax").style.display = "block";

  if (res7 === "6.png") {

    document.getElementById("select1").value = "6";
  } else if (res7 === "150.png") {

    document.getElementById("select1").value = "150";
  }
typeweak();
  
}
if (iconmegayres1 == "6my.png" || iconmegayres1 == "150my.png") {

  document.getElementById("icon1-megay").style.display = "block";

  if (res7 === "6.png") {

    document.getElementById("select1").value = "6";
  } else if (res7 === "150.png") {

    document.getElementById("select1").value = "150";
  }
typeweak();
  
}
if (icon1alolares1 == "52a.png") {

  document.getElementById("icon1-alola1").style.display = "block";
  document.getElementById("icon1-galar1").style.display = "block";

  if (res7 === "52.png") {
    document.getElementById("type1").src = "../types/" + "Normal.png";
    document.getElementById("select1").value = "52";
  }
  typeweak();
}
if (icon1galarres1 == "52g.png") {

  document.getElementById("icon1-alola1").style.display = "block";
  document.getElementById("icon1-galar1").style.display = "block";

  if (res7 === "52.png") {
    document.getElementById("type1").src = "../types/" + "Normal.png";
    document.getElementById("select1").value = "52";
  }
  typeweak();
}
if (icongiganres1 == "809_1.png" || icongiganres1 == "3_1.png" || icongiganres1 == "6_1.png" || icongiganres1 == "9_1.png" || icongiganres1 == "12_1.png" || icongiganres1 == "25_1.png" || icongiganres1 == "52_1.png" || icongiganres1 == "68_1.png" || icongiganres1 == "94_1.png" || icongiganres1 == "99_1.png" || icongiganres1 == "131_1.png" || icongiganres1 == "133_1.png" || icongiganres1 == "143_1.png" || icongiganres1 == "569_1.png" || icongiganres1 == "812_1.png" || icongiganres1 == "815_1.png" || icongiganres1 == "818_1.png" || icongiganres1 == "823_1.png" || icongiganres1 == "826_1.png" || icongiganres1 == "834_1.png" || icongiganres1 == "839_1.png" || icongiganres1 == "842_1.png" || icongiganres1 == "844_1.png" || icongiganres1 == "849_1.png" || icongiganres1 == "851_1.png" || icongiganres1 == "858_1.png" || icongiganres1 == "861_1.png" || icongiganres1 == "869_1.png" || icongiganres1 == "879_1.png" || icongiganres1 == "884_1.png" || icongiganres1 == "892_1.png") {

  document.getElementById("icon1-gigan").style.display = "block";

  if (res7 === "3.png") {
    document.getElementById("select1").value = "3";

  } else if (res7 === "6.png") {
    document.getElementById("select1").value = "6";

  } else if (res7 === "9.png") {
    document.getElementById("select1").value = "9";

  } else if (res7 === "12.png") {
    document.getElementById("select1").value = "12";

  } else if (res7 === "25.png") {
    document.getElementById("select1").value = "25";

  } else if (res7 === "52.png") {
    document.getElementById("select1").value = "52";

  } else if (res7 === "68.png") {
    document.getElementById("select1").value = "68";

  } else if (res7 === "94.png") {
    document.getElementById("select1").value = "94";

  } else if (res7 === "99.png") {
    document.getElementById("select1").value = "99";

  } else if (res7 === "131.png") {
    document.getElementById("select1").value = "131";

  } else if (res7 === "133.png") {
    document.getElementById("select1").value = "133";

  } else if (res7 === "143.png") {
    document.getElementById("select1").value = "143";

  } else if (res7 === "569.png") {
    document.getElementById("select1").value = "569";

  } else if (res7 === "812.png") {
    document.getElementById("select1").value = "812";

  } else if (res7 === "815.png") {
    document.getElementById("select1").value = "815";

  } else if (res7 === "818.png") {
    document.getElementById("select1").value = "818";

  } else if (res7 === "823.png") {
    document.getElementById("select1").value = "823";

  } else if (res7 === "839.png") {
    document.getElementById("select1").value = "839";

  } else if (res7 === "826.png") {
    document.getElementById("select1").value = "826";

  } else if (res7 === "834.png") {
    document.getElementById("select1").value = "834";

  } else if (res7 === "842.png") {
    document.getElementById("select1").value = "842";

  } else if (res7 === "844.png") {
    document.getElementById("select1").value = "844";

  } else if (res7 === "849.png") {
    document.getElementById("select1").value = "849";

  } else if (res7 === "851.png") {
    document.getElementById("select1").value = "851";

  } else if (res7 === "858.png") {
    document.getElementById("select1").value = "858";

  } else if (res7 === "861.png") {
    document.getElementById("select1").value = "861";

  } else if (res7 === "869.png") {
    document.getElementById("select1").value = "869";

  } else if (res7 === "879.png") {
    document.getElementById("select1").value = "879";

  } else if (res7 === "884.png") {
    document.getElementById("select1").value = "884";

  } else if (res7 === "892.png") {
    document.getElementById("select1").value = "892";

  } else if (res7 === "809.png") {
    document.getElementById("select1").value = "809";

  }
  typeweak();
}
if (iconaltformres1 == "889_1.png" || iconaltformres1 == "888_1.png" || iconaltformres1 == "877_1.png" || iconaltformres1 == "875_1.png" || iconaltformres1 == "800_1.png" || iconaltformres1 == "746_1.png" || iconaltformres1 == "745_1.png" || iconaltformres1 == "741_1.png" || iconaltformres1 == "718_1.png" || iconaltformres1 == "658_1.png" || iconaltformres1 == "720_1.png" || iconaltformres1 == "648_1.png" || iconaltformres1 == "647_1.png" || iconaltformres1 == "645_1.png" || iconaltformres1 == "642_1.png" || iconaltformres1 == "641_1.png" || iconaltformres1 == "586_1.png" || iconaltformres1 == "585_1.png" || iconaltformres1 == "555_1.png" || iconaltformres1 == "550_1.png" || iconaltformres1 == "492_1.png" || iconaltformres1 == "487_1.png" || iconaltformres1 == "351_1.png" || iconaltformres1 == "386_1.png" || iconaltformres1 == "249_1.png" || iconaltformres1 == "412_1.png" || iconaltformres1 == "413_1.png" || iconaltformres1 == "421_1.png" || iconaltformres1 == "422_1.png" || iconaltformres1 == "423_1.png" || iconaltformres1 == "479_1.png") {

  document.getElementById("icon1-altform").style.display = "block";

  if (res7 === "351.png") {

    document.getElementById("select1").value = "351";
    document.getElementById("type1").src = "../types/" + "Normal.png";
  } else if (res7 === "386.png") {

    document.getElementById("select1").value = "386";

  } else if (res7 === "249.png") {

    document.getElementById("select1").value = "249";

  } else if (res7 === "412.png") {

    document.getElementById("select1").value = "412";

  } else if (res7 === "413.png") {

    document.getElementById("select1").value = "413";

  } else if (res7 === "421.png") {

    document.getElementById("select1").value = "421";

  } else if (res7 === "422.png") {

    document.getElementById("select1").value = "422";

  } else if (res7 === "423.png") {

    document.getElementById("select1").value = "423";

  } else if (res7 === "479.png") {

    document.getElementById("select1").value = "479";

  } else if (res7 === "487.png") {

    document.getElementById("select1").value = "487";

  } else if (res7 === "492.png") {

    document.getElementById("select1").value = "492";

  } else if (res7 === "550.png") {

    document.getElementById("select1").value = "550";

  } else if (res7 === "555.png") {

    document.getElementById("select1").value = "555";

  } else if (res7 === "585.png") {

    document.getElementById("select1").value = "585";

  } else if (res7 === "586.png") {

    document.getElementById("select1").value = "586";

  } else if (res7 === "641.png") {

    document.getElementById("select1").value = "641";

  } else if (res7 === "642.png") {

    document.getElementById("select1").value = "642";

  } else if (res7 === "645.png") {

    document.getElementById("select1").value = "645";

  } else if (res7 === "647.png") {

    document.getElementById("select1").value = "647";

  } else if (res7 === "648.png") {

    document.getElementById("select1").value = "648";

  } else if (res7 === "720.png") {

    document.getElementById("select1").value = "720";

  } else if (res7 === "658.png") {

    document.getElementById("select1").value = "658";
    document.getElementById("preffix").innerHTML = "Amph";
  } else if (res7 === "718.png") {
    document.getElementById("select1").value = "718";
  } else if (res7 === "741.png") {
    document.getElementById("select1").value = "741";
    document.getElementById("type1").src = "../types/" + "Feu.png";
  } else if (res7 === "745.png") {
    document.getElementById("select1").value = "745";
  } else if (res7 === "746.png") {
    document.getElementById("select1").value = "746";
  } else if (res7 === "800.png") {
    document.getElementById("select1").value = "800";
  } else if (res7 === "875.png") {
    document.getElementById("select1").value = "875";
  } else if (res7 === "877.png") {
    document.getElementById("select1").value = "877";
  } else if (res7 === "888.png") {
    document.getElementById("select1").value = "888";
  } else if (res7 === "889.png") {
    document.getElementById("select1").value = "889";
  }
typeweak();
  
}
if (iconaltform2res1 == "892_2.png" || iconaltform2res1 == "849_2.png" || iconaltform2res1 == "745_2.png" || iconaltform2res1 == "741_2.png" || iconaltform2res1 == "718_2.png" || iconaltform2res1 == "586_2.png" || iconaltform2res1 == "585_2.png" || iconaltform2res1 == "351_2.png" || iconaltform2res1 == "386_2.png" || iconaltform2res1 == "412_2.png" || iconaltform2res1 == "413_2.png" || iconaltform2res1 == "479_2.png") {

  document.getElementById("icon1-altform2").style.display = "block";

  if (res7 === "351.png") {

    document.getElementById("select1").value = "351";
    document.getElementById("type1").src = "../types/" + "Normal.png";
  } else if (res7 === "386.png") {

    document.getElementById("select1").value = "386";

  } else if (res7 === "412.png") {

    document.getElementById("select1").value = "412";

  } else if (res7 === "413.png") {

    document.getElementById("select1").value = "413";

  } else if (res7 === "479.png") {

    document.getElementById("select1").value = "479";

  } else if (res7 === "585.png") {

    document.getElementById("select1").value = "585";

  } else if (res7 === "586.png") {

    document.getElementById("select1").value = "586";

  } else if (res7 === "718.png") {
    document.getElementById("select1").value = "718";
  } else if (res7 === "741.png") {
    document.getElementById("select1").value = "741";
    document.getElementById("type1").src = "../types/" + "Feu.png";
  } else if (res7 === "745.png") {
    document.getElementById("select1").value = "745";
  } else if (res7 === "849.png") {
    document.getElementById("select1").value = "849";
  } else if (res7 === "892.png") {
    document.getElementById("select1").value = "892";
  }
typeweak();
  
}
if (iconaltform3res1 == "892_3.png" || iconaltform3res1 == "741_3.png" || iconaltform3res1 == "586_3.png" || iconaltform3res1 == "585_3.png" || iconaltform3res1 == "351_3.png" || iconaltform3res1 == "386_3.png" || iconaltform3res1 == "479_3.png") {

  document.getElementById("icon1-altform3").style.display = "block";

  if (res7 === "351.png") {

    document.getElementById("select1").value = "351";
    document.getElementById("type1").src = "../types/" + "Normal.png";
  } else if (res7 === "386.png") {

    document.getElementById("select1").value = "386";

  } else if (res7 === "479.png") {

    document.getElementById("select1").value = "479";

  } else if (res7 === "585.png") {

    document.getElementById("select1").value = "585";

  } else if (res7 === "586.png") {
    document.getElementById("select1").value = "586";
  } else if (res7 === "741.png") {
    document.getElementById("select1").value = "741";
    document.getElementById("type1").src = "../types/" + "Feu.png";
  } else if (res7 === "892.png") {
    document.getElementById("select1").value = "892";
  }
typeweak();
  
}
if (iconaltform4res1 == "479_4.png") {

  document.getElementById("icon1-altform4").style.display = "block";

  if (res7 === "479.png") {
    document.getElementById("select1").value = "479";
  }
typeweak();
  
}
if (iconaltform5res1 == "479_5.png") {

  document.getElementById("icon1-altform5").style.display = "block";

  if (res7 === "479.png") {
    document.getElementById("select1").value = "479";
  }
typeweak();
  
}
if (iconaltgalarform2res1 == "555g_2.png") {
  document.getElementById("icon1-altgalarform2").style.display = "block";
  if (res7 === "555.png") {

    document.getElementById("select1").value = "555";

  }
  typeweak();
}
}

function iconMega1() {

  var alolapic2 = document.getElementById("pic1").src;
  var alolapic3 = document.getElementById("pic3").src;
  console.log(alolapic2);
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(".png", "m.png");
  var alolares5 = alolares4.replace(/.png|m.png/, "m.png");
  document.getElementById("pic1").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("megaoui").innerHTML = "Mega ";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1-mega").style.display = "none";
  document.getElementById("icon1-gigan").style.display = "none";
  document.getElementById("icon1-galar").style.display = "none";
  document.getElementById("icon1").style.display = "block";

  if (alolares3 === "383m.png") {

        document.getElementById("select1").value = "383m";
        document.getElementById("megaoui").innerHTML = "Primo ";
    
      } else if (alolares3 === "130m.png") {
        document.getElementById("select1").value = "130m";
      } else if (alolares3 === "359m.png") {
    
        document.getElementById("select1").value = "359m";
    
      } else if (alolares3 === "3m.png") {
    
        document.getElementById("select1").value = "3m";
    
      } else if (alolares3 === "15m.png") {
    
        document.getElementById("select1").value = "15m";
    
      } else if (alolares3 === "115m.png") {
    
        document.getElementById("select1").value = "115m";
    
      } else if (alolares3 === "142m.png") {
    
        document.getElementById("select1").value = "142m";
    
      } else if (alolares3 === "381m.png") {
    
        document.getElementById("select1").value = "381m";
    
      } else if (alolares3 === "380m.png") {
    
        document.getElementById("select1").value = "380m";
    
      } else if (alolares3 === "80m.png") {
    
        document.getElementById("select1").value = "80m";
    
      } else if (alolares3 === "719m.png") {
    
        document.getElementById("select1").value = "719m";
    
      } else if (alolares3 === "254m.png") {
    
        document.getElementById("select1").value = "254m";
    
      } else if (alolares3 === "448m.png") {
    
        document.getElementById("select1").value = "448m";
    
      } else if (alolares3 === "229m.png") {
    
        document.getElementById("select1").value = "229m";
    
      } else if (alolares3 === "303m.png") {
    
        document.getElementById("select1").value = "303m";
    
      } else if (alolares3 === "65m.png") {
    
        document.getElementById("select1").value = "65m";
    
      } else if (alolares3 === "384m.png") {
    
        document.getElementById("select1").value = "384m";
    
      } else if (alolares3 === "382m.png") {
    
        document.getElementById("select1").value = "382m";
        document.getElementById("megaoui").innerHTML = "Primo ";
      } else if (alolares3 === "282m.png") {
    
        document.getElementById("select1").value = "282m";
      } else if (alolares3 === "362m.png") {
    
        document.getElementById("select1").value = "362m";
      } else if (alolares3 === "248m.png") {
    
        document.getElementById("select1").value = "248m";
      } else if (alolares3 === "475m.png") {
    
        document.getElementById("select1").value = "475m";
      } else if (alolares3 === "214m.png") {
    
        document.getElementById("select1").value = "214m";
      } else if (alolares3 === "94m.png") {
    
        document.getElementById("select1").value = "94m";
      } else if (alolares3 === "181m.png") {
    
        document.getElementById("select1").value = "181m";
      } else if (alolares3 === "127m.png") {
    
        document.getElementById("select1").value = "127m";
      } else if (alolares3 === "9m.png") {
    
        document.getElementById("select1").value = "9m";
      } else if (alolares3 === "257m.png") {
    
        document.getElementById("select1").value = "257m";
      } else if (alolares3 === "531m.png") {
    
        document.getElementById("select1").value = "531m";
      } else if (alolares3 === "208m.png") {
    
        document.getElementById("select1").value = "208m";
      } else if (alolares3 === "323m.png") {
    
        document.getElementById("select1").value = "323m";
      } else if (alolares3 === "354m.png") {
    
        document.getElementById("select1").value = "354m";
      } else if (alolares3 === "260m.png") {
    
        document.getElementById("select1").value = "260m";
      } else if (alolares3 === "319m.png") {
    
        document.getElementById("select1").value = "319m";
      } else if (alolares3 === "302m.png") {
    
        document.getElementById("select1").value = "302m";
      } else if (alolares3 === "373m.png") {
    
        document.getElementById("select1").value = "373m";
      } else if (alolares3 === "445m.png") {
    
        document.getElementById("select1").value = "445m";
      } else if (alolares3 === "212m.png") {
        document.getElementById("select1").value = "212m";

      } else if (alolares3 === "376m.png") {
        document.getElementById("select1").value = "376m";

      } else if (alolares3 === "428m.png") {
        document.getElementById("select1").value = "428m";

      } else if (alolares3 === "334m.png") {
        document.getElementById("select1").value = "334m";

      }

    typeweak();

}

function iconGigan1() {

  var alolapic2 = document.getElementById("pic1").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(".png", "_1.png");
  var alolares5 = alolares4.replace(/.png|_1.png/, "_1.png");
  document.getElementById("pic1").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("Gigantamax").innerHTML = " Gigantamax";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1-gigan").style.display = "none";
  document.getElementById("icon1-mega").style.display = "none";
  document.getElementById("icon1-megax").style.display = "none";
  document.getElementById("icon1-megay").style.display = "none";
  document.getElementById("icon1-alola1").style.display = "none";
  document.getElementById("icon1-galar1").style.display = "none";
  document.getElementById("icon1").style.display = "block";
  document.getElementById("icon1-altform2").style.display = "none";
  document.getElementById("icon1-altform3").style.display = "none";

  if (alolares3 === "3_1.png"){

    document.getElementById("select1").value = "3_1";

  } else if (alolares3 === "809_1.png") {
    document.getElementById("select1").value = "809_1";

  } else if (alolares3 === "6_1.png") {
    document.getElementById("select1").value = "6_1";

  } else if (alolares3 === "9_1.png") {
    document.getElementById("select1").value = "9_1";

  } else if (alolares3 === "12_1.png") {
    document.getElementById("select1").value = "12_1";

  } else if (alolares3 === "25_1.png") {
    document.getElementById("select1").value = "25_1";

  } else if (alolares3 === "52_1.png") {
    document.getElementById("select1").value = "52_1";

  } else if (alolares3 === "68_1.png") {
    document.getElementById("select1").value = "68_1";

  } else if (alolares3 === "94_1.png") {
    document.getElementById("select1").value = "94_1";

  } else if (alolares3 === "99_1.png") {
    document.getElementById("select1").value = "99_1";

  } else if (alolares3 === "131_1.png") {
    document.getElementById("select1").value = "131_1";

  } else if (alolares3 === "133_1.png") {
    document.getElementById("select1").value = "133_1";

  } else if (alolares3 === "143_1.png") {
    document.getElementById("select1").value = "143_1";

  } else if (alolares3 === "569_1.png") {
    document.getElementById("select1").value = "569_1";

  } else if (alolares3 === "812_1.png") {
    document.getElementById("select1").value = "812_1";

  } else if (alolares3 === "815_1.png") {
    document.getElementById("select1").value = "815_1";

  } else if (alolares3 === "818_1.png") {
    document.getElementById("select1").value = "818_1";

  } else if (alolares3 === "823_1.png") {
    document.getElementById("select1").value = "823_1";

  } else if (alolares3 === "826_1.png") {
    document.getElementById("select1").value = "826_1";

  } else if (alolares3 === "834_1.png") {
    document.getElementById("select1").value = "834_1";

  } else if (alolares3 === "839_1.png") {
    document.getElementById("select1").value = "839_1";

  } else if (alolares3 === "842_1.png") {
    document.getElementById("select1").value = "842_1";

  } else if (alolares3 === "844_1.png") {
    document.getElementById("select1").value = "844_1";

  } else if (alolares3 === "849_1.png") {
    document.getElementById("select1").value = "849_1";

  } else if (alolares3 === "851_1.png") {
    document.getElementById("select1").value = "851_1";

  } else if (alolares3 === "858_1.png") {
    document.getElementById("select1").value = "858_1";

  } else if (alolares3 === "861_1.png") {
    document.getElementById("select1").value = "861_1";

  } else if (alolares3 === "869_1.png") {
    document.getElementById("select1").value = "869_1";

  } else if (alolares3 === "879_1.png") {
    document.getElementById("select1").value = "879_1";

  } else if (alolares3 === "884_1.png") {
    document.getElementById("select1").value = "884_1";

  } else if (alolares3 === "892_1.png") {
    document.getElementById("select1").value = "892_1";

  }

    typeweak();

}

function iconGalar1() {

  var galarpic2 = document.getElementById("pic1").src;
  var galarpic3 = document.getElementById("pic3").src;
  var galarres1 = galarpic2.substr(60);
  var galarres4 = galarpic3.substr(66);
  var galarres3 = galarres1.replace(/.png|a.png/, "g.png");
  var galarres5 = galarres4.replace(/.png|g.png|a.png/, "g.png");
  document.getElementById("pic1").src = "../sprites/" + galarres3;
  document.getElementById("pic3").src = "../sprites/fused/" + galarres5;
  document.getElementById("galar").innerHTML = "Galarian ";
  document.getElementById("alola").innerHTML = "";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1-galar").style.display = "none";
  document.getElementById("icon1-mega").style.display = "none";
  document.getElementById("icon1-altform").style.display = "none";
  document.getElementById("icon1").style.display = "block";

  if (galarres3 === "77g.png") {
    document.getElementById("type1").src = "../types/" + "Psy.png";
    document.getElementById("select1").value = "77g";
  } else if (galarres3 === "110g.png") {
    document.getElementById("type1").src = "../types/" + "Poison.png";
    document.getElementById("select1").value = "110g";
  } else if (galarres3 === "83g.png") {
    document.getElementById("type1").src = "../types/" + "Combat.png";
    document.getElementById("select1").value = "83g";
  } else if (galarres3 === "78g.png") {
    document.getElementById("type1").src = "../types/" + "Psy.png";
    document.getElementById("select1").value = "78g";
  } else if (galarres3 === "122g.png") {
    document.getElementById("type1").src = "../types/" + "Glace.png";
    document.getElementById("select1").value = "122g";
  } else if (galarres3 === "222g.png") {
    document.getElementById("type1").src = "../types/" + "Spectre.png";
    document.getElementById("select1").value = "222g";
  } else if (galarres3 === "263g.png") {
    document.getElementById("type1").src = "../types/" + "Tenebres.png";
    document.getElementById("select1").value = "263g";
  } else if (galarres3 === "264g.png") {
    document.getElementById("type1").src = "../types/" + "Tenebres.png";
    document.getElementById("select1").value = "264g";
  } else if (galarres3 === "562g.png") {
    document.getElementById("type1").src = "../types/" + "Sol.png";
    document.getElementById("select1").value = "562g";
  } else if (galarres3 === "555g.png") {
    document.getElementById("type1").src = "../types/" + "Glace.png";
    document.getElementById("select1").value = "555g";
  } else if (galarres3 === "554g.png") {
    document.getElementById("type1").src = "../types/" + "Glace.png";
    document.getElementById("select1").value = "554g";
  } else if (galarres3 === "618g.png") {
    document.getElementById("select1").value = "618g";
  } else if (galarres3 === "79g.png") {
    document.getElementById("type1").src = "../types/" + "Psy.png";
    document.getElementById("select1").value = "79g";
  } else if (galarres3 === "80g.png") {
    document.getElementById("type1").src = "../types/" + "Poison.png";
    document.getElementById("select1").value = "80g";
  } else if (galarres3 === "199g.png") {
    document.getElementById("type1").src = "../types/" + "Poison.png";
    document.getElementById("select1").value = "199g";
  } else if (galarres3 === "144g.png") {
    document.getElementById("type1").src = "../types/" + "Psy.png";
    document.getElementById("select1").value = "144g";
  } else if (galarres3 === "145g.png") {
    document.getElementById("type1").src = "../types/" + "Combat.png";
    document.getElementById("select1").value = "145g";
  } else if (galarres3 === "146g.png") {
    document.getElementById("type1").src = "../types/" + "Tenebres.png";
    document.getElementById("select1").value = "146g";
  }
    typeweak();

}

function iconGalarMiaouss() {

  var galarpic2 = document.getElementById("pic1").src;
  var galarpic3 = document.getElementById("pic3").src;
  var galarres1 = galarpic2.substr(60);
  var galarres4 = galarpic3.substr(66);
  var galarres3 = galarres1.replace(/.png|a.png/, "g.png");
  var galarres5 = galarres4.replace(/.png|g.png|a.png/, "g.png");
  document.getElementById("pic1").src = "../sprites/" + galarres3;
  document.getElementById("pic3").src = "../sprites/fused/" + galarres5;
  document.getElementById("galar").innerHTML = "Galarian ";
  document.getElementById("alola").innerHTML = "";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1-galar1").style.display = "none";
  document.getElementById("icon1-alola1").style.display = "none";
  document.getElementById("icon1-gigan").style.display = "none";
  document.getElementById("icon1").style.display = "block";

if (galarres3 === "52g.png") {
    document.getElementById("type1").src = "../types/" + "Acier.png";
    document.getElementById("select1").value = "52g";
  }
    typeweak();

}

function iconMega1X() {

  var alolapic2 = document.getElementById("pic1").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(".png", "mx.png");
  var alolares5 = alolares4.replace(/.png|mx.png/, "mx.png");
  document.getElementById("pic1").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("megaoui").innerHTML = "Mega ";
  document.getElementById("megaouixy").innerHTML = " X";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1-megax").style.display = "none";
  document.getElementById("icon1").style.display = "block";
  document.getElementById("icon1-megay").style.display = "none";
  document.getElementById("icon1-gigan").style.display = "none";

  if (alolares3 === "6mx.png") {
    document.getElementById("select1").value = "6mx";
  } else if (alolares3 === "150mx.png") {

    document.getElementById("select1").value = "150mx";
  }
  typeweak();
}

function iconMega1Y() {

  var alolapic2 = document.getElementById("pic1").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(".png", "my.png");
  var alolares5 = alolares4.replace(/.png|my.png/, "my.png");
  document.getElementById("pic1").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("megaoui").innerHTML = "Mega ";
  document.getElementById("megaouixy").innerHTML = " Y";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1-megay").style.display = "none";
  document.getElementById("icon1").style.display = "block";
  document.getElementById("icon1-megax").style.display = "none";
  document.getElementById("icon1-gigan").style.display = "none";

  if (alolares3 === "6my.png") {
    document.getElementById("select1").value = "6my";
  } else if (alolares3 === "150my.png") {

    document.getElementById("select1").value = "150my";
  }
  typeweak();
}

function icon1AltForm(){

  var alolapic2 = document.getElementById("pic1").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(".png", "_1.png");
  var alolares5 = alolares4.replace(/.png|_1.png/, "_1.png");
  document.getElementById("pic1").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1").style.display = "block";
  document.getElementById("icon1-galar").style.display = "none";
  document.getElementById("icon1-altform").style.display = "none";
  document.getElementById("icon1-altform2").style.display = "none";
  document.getElementById("icon1-altform3").style.display = "none";
  document.getElementById("icon1-altform4").style.display = "none";
  document.getElementById("icon1-altform5").style.display = "none";

  if (alolares3 === "351_1.png") {
    document.getElementById("select1").value = "351_1";
    document.getElementById("type1").src = "../types/" + "Feu.png";
  } else if (alolares3 === "386_1.png") {
    document.getElementById("select1").value = "386_1";
  } else if (alolares3 === "249_1.png") {
    document.getElementById("select1").value = "249_1";
  } else if (alolares3 === "412_1.png") {
    document.getElementById("select1").value = "412_1";
  } else if (alolares3 === "413_1.png") {
    document.getElementById("select1").value = "413_1";
  } else if (alolares3 === "421_1.png") {
    document.getElementById("select1").value = "421_1";
  } else if (alolares3 === "422_1.png") {
    document.getElementById("select1").value = "422_1";
  } else if (alolares3 === "423_1.png") {
    document.getElementById("select1").value = "423_1";
  } else if (alolares3 === "479_1.png") {
    document.getElementById("select1").value = "479_1";
  } else if (alolares3 === "487_1.png") {
    document.getElementById("select1").value = "487_1";
  } else if (alolares3 === "492_1.png") {
    document.getElementById("select1").value = "492_1";
  } else if (alolares3 === "550_1.png") {
    document.getElementById("select1").value = "550_1";
  } else if (alolares3 === "555_1.png") {
    document.getElementById("select1").value = "555_1";
  } else if (alolares3 === "585_1.png") {
    document.getElementById("select1").value = "585_1";
  } else if (alolares3 === "586_1.png") {
    document.getElementById("select1").value = "586_1";
  } else if (alolares3 === "641_1.png") {
    document.getElementById("select1").value = "641_1";
  } else if (alolares3 === "642_1.png") {
    document.getElementById("select1").value = "642_1";
  } else if (alolares3 === "645_1.png") {
    document.getElementById("select1").value = "645_1";
  } else if (alolares3 === "647_1.png") {
    document.getElementById("select1").value = "647_1";
  } else if (alolares3 === "648_1.png") {
    document.getElementById("select1").value = "648_1";
  } else if (alolares3 === "720_1.png") {
    document.getElementById("select1").value = "720_1";
  } else if (alolares3 === "658_1.png") {
    document.getElementById("select1").value = "658_1";
    document.getElementById("preffix").innerHTML = "Sacha";
  } else if (alolares3 === "718_1.png") {
    document.getElementById("select1").value = "718_1";
  } else if (alolares3 === "741_1.png") {
    document.getElementById("select1").value = "741_1";
    document.getElementById("type1").src = "../types/" + "Psy.png";
  } else if (alolares3 === "745_1.png") {
    document.getElementById("select1").value = "745_1";
  } else if (alolares3 === "746_1.png") {
    document.getElementById("select1").value = "746_1";
  } else if (alolares3 === "800_1.png") {
    document.getElementById("select1").value = "800_1";
  } else if (alolares3 === "875_1.png") {
    document.getElementById("select1").value = "875_1";
  } else if (alolares3 === "877_1.png") {
    document.getElementById("select1").value = "877_1";
  } else if (alolares3 === "888_1.png") {
    document.getElementById("select1").value = "888_1";
  } else if (alolares3 === "889_1.png") {
    document.getElementById("select1").value = "889_1";
  }
  typeweak();
}

function icon1AltForm2(){
  
  var alolapic2 = document.getElementById("pic1").src;

  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);

  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(/.png|g_2.png/, "_2.png");

  var alolares5 = alolares4.replace(/.png|_2.png|g_2.png/, "_2.png");
  document.getElementById("pic1").src = "../sprites/" + alolares3;

  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1").style.display = "block";
  document.getElementById("icon1-altform").style.display = "none";
  document.getElementById("icon1-altform2").style.display = "none";
  document.getElementById("icon1-altform3").style.display = "none";
  document.getElementById("icon1-altform4").style.display = "none";
  document.getElementById("icon1-altform5").style.display = "none";
  document.getElementById("icon1-galar").style.display = "none";
  document.getElementById("icon1-gigan").style.display = "none";

  if (alolares3 === "351_2.png") {
    document.getElementById("select1").value = "351_2";
    document.getElementById("type1").src = "../types/" + "Eau.png";
  } else if (alolares3 === "386_2.png") {
    document.getElementById("select1").value = "386_2";
  }    else if (alolares3 === "412_2.png") {
    document.getElementById("select1").value = "412_2";
  }    else if (alolares3 === "413_2.png") {
    document.getElementById("select1").value = "413_2";
  } else if (alolares3 === "479_2.png") {
    document.getElementById("select1").value = "479_2";
  } else if (alolares3 === "585_2.png") {
    document.getElementById("select1").value = "585_2";
  } else if (alolares3 === "586_2.png") {
    document.getElementById("select1").value = "586_2";
  } else if (alolares3 === "718_2.png") {
    document.getElementById("select1").value = "718_2";
  } else if (alolares3 === "741_2.png") {
    document.getElementById("select1").value = "741_2";
    document.getElementById("type1").src = "../types/" + "Elec.png";
  } else if (alolares3 === "745_2.png") {
    document.getElementById("select1").value = "745_2";
  } else if (alolares3 === "849_2.png") {
    document.getElementById("select1").value = "849_2";
  } else if (alolares3 === "892_2.png") {
    document.getElementById("select1").value = "892_2";
  }
  typeweak();
}

function icon1AltGalarForm2(){
  
  var alolapic2 = document.getElementById("pic1").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var galarres6 = alolares1.replace(/.png|g_2.png/, "g_2.png");
  var alolares5 = alolares4.replace(/.png|_2.png|g_2.png/, "g_2.png");
  document.getElementById("pic1").src = "../sprites/" + galarres6;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1").style.display = "block";
  document.getElementById("icon1-altform").style.display = "none";
  document.getElementById("icon1-altform2").style.display = "none";
  document.getElementById("icon1-altgalarform2").style.display = "none";
  document.getElementById("icon1-altform3").style.display = "none";
  document.getElementById("icon1-altform4").style.display = "none";
  document.getElementById("icon1-altform5").style.display = "none";
  document.getElementById("icon1-galar").style.display = "none";

  if (galarres6 === "555g_2.png") {
    document.getElementById("select1").value = "555g_2";
    document.getElementById("galar").innerHTML = "Galarian ";
  }
  typeweak();
}

function icon1AltForm3(){
  
  var alolapic2 = document.getElementById("pic1").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(".png", "_3.png");
  var alolares5 = alolares4.replace(/.png|_3.png/, "_3.png");
  document.getElementById("pic1").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1").style.display = "block";
  document.getElementById("icon1-altform").style.display = "none";
  document.getElementById("icon1-altform2").style.display = "none";
  document.getElementById("icon1-altform3").style.display = "none";
  document.getElementById("icon1-altform4").style.display = "none";
  document.getElementById("icon1-altform5").style.display = "none";
  document.getElementById("icon1-gigan").style.display = "none";

  if (alolares3 === "351_3.png") {
    document.getElementById("select1").value = "351_3";
    document.getElementById("type1").src = "../types/" + "Glace.png";
  } else if (alolares3 === "386_3.png") {
    document.getElementById("select1").value = "386_3";
  } else if (alolares3 === "479_3.png") {
    document.getElementById("select1").value = "479_3";
  } else if (alolares3 === "585_3.png") {
    document.getElementById("select1").value = "585_3";
  } else if (alolares3 === "586_3.png") {
    document.getElementById("select1").value = "586_3";
  } else if (alolares3 === "741_3.png") {
    document.getElementById("select1").value = "741_3";
    document.getElementById("type1").src = "../types/" + "Spectre.png";
  } else if (alolares3 === "892_3.png") {
    document.getElementById("select1").value = "892_3";
  }
  typeweak();
}

function icon1AltForm4(){
  
  var alolapic2 = document.getElementById("pic1").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(".png", "_4.png");
  var alolares5 = alolares4.replace(/.png|_4.png/, "_4.png");
  document.getElementById("pic1").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1").style.display = "block";
  document.getElementById("icon1-altform").style.display = "none";
  document.getElementById("icon1-altform2").style.display = "none";
  document.getElementById("icon1-altform3").style.display = "none";
  document.getElementById("icon1-altform4").style.display = "none";
  document.getElementById("icon1-altform5").style.display = "none";

if (alolares3 === "479_4.png") {
    document.getElementById("select1").value = "479_4";
  }
  typeweak();
}

function icon1AltForm5(){
  
  var alolapic2 = document.getElementById("pic1").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(".png", "_5.png");
  var alolares5 = alolares4.replace(/.png|_5.png/, "_5.png");
  document.getElementById("pic1").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon1").style.display = "block";
  document.getElementById("icon1-altform").style.display = "none";
  document.getElementById("icon1-altform2").style.display = "none";
  document.getElementById("icon1-altform3").style.display = "none";
  document.getElementById("icon1-altform4").style.display = "none";
  document.getElementById("icon1-altform5").style.display = "none";

if (alolares3 === "479_5.png") {
    document.getElementById("select1").value = "479_5";
  }
  typeweak();
}

// Icon 2

function iconAlola2() {

  var alolapic2 = document.getElementById("pic2").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares2 = alolares1.replace(/.png|g.png/, "a.png");
  var alolares5 = alolares4.replace(/.png|a.png|g.png/, "a.png");
  document.getElementById("pic2").src = "../sprites/" + alolares2;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("alola").innerHTML = "Alolan ";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2-alola").style.display = "none";
  document.getElementById("icon2").style.display = "block";

  if (alolares2 === "50a.png") {
    document.getElementById("type2").src = "../types/" + "Acier.png";
    document.getElementById("select2").value = "50a";
  } else if (alolares2 === "103a.png") {
    document.getElementById("type2").src = "../types/" + "Dragon.png";
    document.getElementById("select2").value = "103a";
  } else if (alolares2 === "75a.png") {
    document.getElementById("type2").src = "../types/" + "Elec.png";
    document.getElementById("select2").value = "75a";
  } else if (alolares2 === "38a.png") {
    document.getElementById("type2").src = "../types/" + "Fee.png";
    document.getElementById("select2").value = "38a";
  } else if (alolares2 === "53a.png") {
    document.getElementById("type2").src = "../types/" + "Tenebres.png";
    document.getElementById("select2").value = "53a";
  } else if (alolares2 === "28a.png") {
    document.getElementById("type2").src = "../types/" + "Acier.png";
    document.getElementById("select2").value = "28a";
  } else if (alolares2 === "105a.png") {
    document.getElementById("type2").src = "../types/" + "Feu.png";
    document.getElementById("select2").value = "105a";
  } else if (alolares2 === "74a.png") {
    document.getElementById("type2").src = "../types/" + "Elec.png";
    document.getElementById("select2").value = "74a";
  } else if (alolares2 === "37a.png") {
    document.getElementById("type2").src = "../types/" + "Glace.png";
    document.getElementById("select2").value = "37a";
  } else if (alolares2 === "51a.png") {
    document.getElementById("type2").src = "../types/" + "Acier.png";
    document.getElementById("select2").value = "51a";
  } else if (alolares2 === "76a.png") {
    document.getElementById("type2").src = "../types/" + "Elec.png";
    document.getElementById("select2").value = "76a";
  } else if (alolares2 === "26a.png") {
    document.getElementById("type2").src = "../types/" + "Psy.png";
    document.getElementById("select2").value = "26a";
  } else if (alolares2 === "88a.png") {
    document.getElementById("type2").src = "../types/" + "Tenebres.png";
    document.getElementById("select2").value = "88a";
  } else if (alolares2 === "89a.png") {
    document.getElementById("type2").src = "../types/" + "Tenebres.png";
    document.getElementById("select2").value = "89a";
  } else if (alolares2 === "27a.png") {
    document.getElementById("type2").src = "../types/" + "Acier.png";
    document.getElementById("select2").value = "27a";
  } else if (alolares2 === "20a.png") {

    document.getElementById("select2").value = "20a";
  } else if (alolares2 === "19a.png") {

    document.getElementById("select2").value = "19a";

  }
    typeweak();

}

function iconAlolaMiaouss2() {

  var alolapic2 = document.getElementById("pic2").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(/.png|g.png/, "a.png");
  var alolares5 = alolares4.replace(/.png|a.png|g.png/, "a.png");
  document.getElementById("pic2").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("alola").innerHTML = "Alolan ";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2-alola1").style.display = "none";
  document.getElementById("icon2-galar1").style.display = "none";
  document.getElementById("icon2").style.display = "block";

  if (alolares3 === "52a.png") {
        document.getElementById("type2").src = "../types/" + "Tenebres.png";
        document.getElementById("select2").value = "52a";
      }
    typeweak();

}

function iconNormal2() {

  var test3 = document.getElementById("pic2").src;
    var test5 = document.getElementById("pic3").src;
    var res5 = test3.substr(32);
    var res9 = test5.substr(66);
    var res7 = res5.replace(/a.png|m.png|g.png|mx.png|my.png|_1.png|_2.png|g_2.png|_3.png|_4.png|_5.png/, ".png");
    var res10 = res9.replace(/a.png|m.png|g.png|mx.png|my.png|_1.png|_2.png|g_2.png|_3.png|_4.png|_5.png/, ".png");
    document.getElementById("pic2").src = "../sprites/" + res7;
  document.getElementById("pic3").src = "../sprites/fused/" + res10;
  document.getElementById("select2").value = res7;
  document.getElementById("alola").innerHTML = "";
  document.getElementById("megaoui").innerHTML = "";
  document.getElementById("galar").innerHTML = "";
  document.getElementById("megaouixy").innerHTML = "";
  document.getElementById("Gigantamax").innerHTML = "";
  document.getElementById("select1").disabled = false;
  document.getElementById("select2").disabled = false;
  document.getElementById("icon2").style.display = "none";
  var iconalola1 = document.getElementById("icon2-alola").src;
  var iconalolares1 = iconalola1.substr(58);
  var iconmega1 = document.getElementById("icon2-mega").src;
  var iconmegares1 = iconmega1.substr(58);
  var icongalar1 = document.getElementById("icon2-galar").src;
  var icongalarres1 = icongalar1.substr(58);
  var iconmegax1 = document.getElementById("icon2-megax").src;
  var iconmegaxres1 = iconmegax1.substr(58);
  var iconmegay1 = document.getElementById("icon2-megay").src;
  var iconmegayres1 = iconmegay1.substr(58);
  var icon1galar1 = document.getElementById("icon2-galar1").src;
  var icon1galarres1 = icon1galar1.substr(58);
  var icon1alola1 = document.getElementById("icon2-alola1").src;
  var icon1alolares1 = icon1alola1.substr(58);
  var icongigan1 = document.getElementById("icon2-gigan").src;
  var icongiganres1 = icongigan1.substr(58);
  var iconaltform1 = document.getElementById("icon2-altform").src;
  var iconaltformres1 = iconaltform1.substr(58);
  var iconaltform2 = document.getElementById("icon2-altform2").src;
  var iconaltform2res1 = iconaltform2.substr(58);
  var iconaltgalarform2 = document.getElementById("icon2-altgalarform2").src;
  var iconaltgalarform2res1 = iconaltgalarform2.substr(58);
  var iconaltform3 = document.getElementById("icon2-altform3").src;
  var iconaltform3res1 = iconaltform3.substr(58);
  var iconaltform4 = document.getElementById("icon2-altform4").src;
  var iconaltform4res1 = iconaltform4.substr(58);
  var iconaltform5 = document.getElementById("icon2-altform5").src;
  var iconaltform5res1 = iconaltform5.substr(58);
  document.getElementById("icon2-mega").src = "../icons/" + iconmegares1;
  document.getElementById("icon2-alola").src = "../icons/" + iconalolares1;
  document.getElementById("icon2-galar").src = "../icons/" + icongalarres1;
  document.getElementById("icon2-megax").src = "../icons/" + iconmegaxres1;
  document.getElementById("icon2-megay").src = "../icons/" + iconmegayres1;
  document.getElementById("icon2-alola1").src = "../icons/" + icon1alolares1;
  document.getElementById("icon2-galar1").src = "../icons/" + icon1galarres1;
  document.getElementById("icon2-gigan").src = "../icons/" + icongiganres1;
  document.getElementById("icon2-altform").src = "../icons/" + iconaltformres1;
  document.getElementById("icon2-altform2").src = "../icons/" + iconaltform2res1;
  document.getElementById("icon2-altgalarform2").src = "../icons/" + iconaltgalarform2res1;
  document.getElementById("icon2-altform3").src = "../icons/" + iconaltform3res1;
  document.getElementById("icon2-altform4").src = "../icons/" + iconaltform4res1;
  document.getElementById("icon2-altform5").src = "../icons/" + iconaltform5res1;

if (iconalolares1 == "19a.png" || iconalolares1 == "20a.png" || iconalolares1 == "26a.png" || iconalolares1 == "27a.png" || iconalolares1 == "28a.png" || iconalolares1 == "37a.png" || iconalolares1 == "38a.png" || iconalolares1 == "50a.png" || iconalolares1 == "51a.png" || iconalolares1 == "53a.png" || iconalolares1 == "74a.png" || iconalolares1 == "75a.png" || iconalolares1 == "76a.png" || iconalolares1 == "88a.png" || iconalolares1 == "89a.png" || iconalolares1 == "103a.png" || iconalolares1 == "105a.png") {
 
  
  document.getElementById("icon2-alola").style.display = "block";

  if (res7 === "50.png") {
    document.getElementById("type2").src = "../types/" + "Sol.png";
    document.getElementById("select2").value = "50";
  } else if (res7 === "103.png") {
    document.getElementById("type2").src = "../types/" + "Psy.png";
    document.getElementById("select2").value = "103";
  } else if (res7 === "75.png") {
    document.getElementById("type2").src = "../types/" + "Sol.png";
    document.getElementById("select2").value = "75";
  } else if (res7 === "38.png") {
    document.getElementById("type2").src = "../types/" + "Feu.png";
    document.getElementById("select2").value = "38";
  } else if (res7 === "53.png") {
    document.getElementById("type2").src = "../types/" + "Normal.png";
    document.getElementById("select2").value = "53";
  } else if (res7 === "28.png") {
    document.getElementById("type2").src = "../types/" + "Sol.png";
    document.getElementById("select2").value = "28";
  } else if (res7 === "105.png") {
    document.getElementById("type2").src = "../types/" + "Sol.png";
    document.getElementById("select2").value = "105";
  } else if (res7 === "74.png") {
    document.getElementById("type2").src = "../types/" + "Sol.png";
    document.getElementById("select2").value = "74";
  } else if (res7 === "37.png") {
    document.getElementById("type2").src = "../types/" + "Feu.png";
    document.getElementById("select2").value = "37";
  } else if (res7 === "51.png") {
    document.getElementById("type2").src = "../types/" + "Sol.png";
    document.getElementById("select2").value = "51";
  } else if (res7 === "76.png") {
    document.getElementById("type2").src = "../types/" + "Sol.png";
    document.getElementById("select2").value = "76";
  } else if (res7 === "26.png") {
    document.getElementById("type2").src = "../types/" + "Elec.png";
    document.getElementById("select2").value = "26";
  } else if (res7 === "88.png") {
    document.getElementById("type2").src = "../types/" + "Poison.png";
    document.getElementById("select2").value = "88";
  } else if (res7 === "89.png") {
    document.getElementById("type2").src = "../types/" + "Poison.png";
    document.getElementById("select2").value = "89";
  } else if (res7 === "27.png") {
    document.getElementById("type2").src = "../types/" + "Sol.png";
    document.getElementById("select2").value = "27";
  } else if (res7 === "122.png") {
    document.getElementById("type2").src = "../types/" + "Fee.png";
    document.getElementById("select2").value = "122";
  } else if (res7 === "20.png") {
    document.getElementById("select2").value = "20";
  } else if (res7 === "19.png") {

    document.getElementById("select2").value = "19";
  }
typeweak();
}
if (iconmegares1 == "3m.png" || iconmegares1 == "9m.png" || iconmegares1 == "15m.png" || iconmegares1 == "18m.png" || iconmegares1 == "65m.png" || iconmegares1 == "80m.png" || iconmegares1 == "94m.png" || iconmegares1 == "115m.png" || iconmegares1 == "127m.png" || iconmegares1 == "130m.png" || iconmegares1 == "142m.png" || iconmegares1 == "181m.png" || iconmegares1 == "208m.png" || iconmegares1 == "212m.png" || iconmegares1 == "214m.png" || iconmegares1 == "229m.png" || iconmegares1 == "248m.png" || iconmegares1 == "254m.png" || iconmegares1 == "257m.png" || iconmegares1 == "260m.png" || iconmegares1 == "282m.png" || iconmegares1 == "302m.png" || iconmegares1 == "303m.png" || iconmegares1 == "306m.png" || iconmegares1 == "308m.png" || iconmegares1 == "310m.png" || iconmegares1 == "319m.png" || iconmegares1 == "323m.png" || iconmegares1 == "334m.png" || iconmegares1 == "354m.png" || iconmegares1 == "359m.png" || iconmegares1 == "362m.png" || iconmegares1 == "373m.png" || iconmegares1 == "376m.png" || iconmegares1 == "380m.png" || iconmegares1 == "381m.png" || iconmegares1 == "382m.png" || iconmegares1 == "383m.png" || iconmegares1 == "384m.png" || iconmegares1 == "428m.png" || iconmegares1 == "445m.png" || iconmegares1 == "448m.png" || iconmegares1 == "460m.png" || iconmegares1 == "475m.png" || iconmegares1 == "531m.png" || iconmegares1 == "719m.png" ) {

document.getElementById("icon2-mega").style.display = "block";

if (res7 === "127.png") {
  document.getElementById("type2").src = "../types/" + "Insecte.png";
  document.getElementById("select2").value = "127";
} else if (res7 === "130.png") {
  document.getElementById("type2").src = "../types/" + "Vol.png";
  document.getElementById("select2").value = "130";
} else if (res7 === "181.png") {
  document.getElementById("type2").src = "../types/" + "Elec.png";
  document.getElementById("select2").value = "181";
} else if (res7 === "254.png") {
  document.getElementById("type2").src = "../types/" + "Plante.png";
  document.getElementById("select2").value = "254";
} else if (res7 === "257.png") {
  document.getElementById("select2").value = "257";
} else if (res7 === "306.png") {
  document.getElementById("type2").src = "../types/" + "Roche.png";
  document.getElementById("select2").value = "306";
} else if (res7 === "334.png") {
  document.getElementById("type2").src = "../types/" + "Vol.png";
  document.getElementById("select2").value = "334";
} else if (res7 === "383.png") {
  document.getElementById("type2").src = "../types/" + "Sol.png";
  document.getElementById("select2").value = "383";
  document.getElementById("megaoui").innerHTML = "";
} else if (res7 === "428.png") {
  document.getElementById("type2").src = "../types/" + "Normal.png";
  document.getElementById("select2").value = "428";
} else if (res7 === "531.png") {
  document.getElementById("type2").src = "../types/" + "Normal.png";
  document.getElementById("select2").value = "531";
} else if (res7 === "115.png") {

  document.getElementById("select2").value = "115";
} else if (res7 === "9.png") {

  document.getElementById("select2").value = "9";
} else if (res7 === "94.png") {

  document.getElementById("select2").value = "94";
} else if (res7 === "381.png") {

  document.getElementById("select2").value = "381";
} else if (res7 === "719.png") {

  document.getElementById("select2").value = "719";
} else if (res7 === "80.png") {

  document.getElementById("select2").value = "80";
} else if (res7 === "15.png") {

  document.getElementById("select2").value = "15";
} else if (res7 === "373.png") {

  document.getElementById("select2").value = "373";
} else if (res7 === "359.png") {

  document.getElementById("select2").value = "359";
} else if (res7 === "448.png") {

  document.getElementById("select2").value = "448";
} else if (res7 === "229.png") {

  document.getElementById("select2").value = "229";
} else if (res7 === "303.png") {

  document.getElementById("select2").value = "303";
} else if (res7 === "65.png") {

  document.getElementById("select2").value = "65";
} else if (res7 === "384.png") {

  document.getElementById("select2").value = "384";
} else if (res7 === "382.png") {

  document.getElementById("select2").value = "382";
  document.getElementById("megaoui").innerHTML = "";
} else if (res7 === "282.png") {

  document.getElementById("select2").value = "282";
} else if (res7 === "362.png") {

  document.getElementById("select2").value = "362";
} else if (res7 === "248.png") {

  document.getElementById("select2").value = "248";
} else if (res7 === "475.png") {

  document.getElementById("select2").value = "475";
} else if (res7 === "214.png") {

  document.getElementById("select2").value = "214";
} else if (res7 === "260.png") {

  document.getElementById("select2").value = "260";
} else if (res7 === "280.png") {

  document.getElementById("select2").value = "280";
} else if (res7 === "142.png") {

  document.getElementById("select2").value = "142";
} else if (res7 === "354.png") {

  document.getElementById("select2").value = "354";
} else if (res7 === "460.png") {

  document.getElementById("select2").value = "460";
} else if (res7 === "18.png") {

  document.getElementById("select2").value = "18";
} else if (res7 === "380.png") {

  document.getElementById("select2").value = "380";
} else if (res7 === "212.png") {

  document.getElementById("select2").value = "212";
} else if (res7 === "319.png") {

  document.getElementById("select2").value = "319";
} else if (res7 === "445.png") {

  document.getElementById("select2").value = "445";
} else if (res7 === "208.png") {

  document.getElementById("select2").value = "208";
} else if (res7 === "302.png") {

  document.getElementById("select2").value = "302";
} else if (res7 === "308.png") {

  document.getElementById("select2").value = "308";
} else if (res7 === "310.png") {

  document.getElementById("select2").value = "310";
}


  typeweak();
}
if (icongalarres1 == "144g.png" || icongalarres1 == "145g.png" || icongalarres1 == "146g.png" || icongalarres1 == "79g.png" || icongalarres1 == "80g.png" || icongalarres1 == "199g.png" || icongalarres1 == "618g.png" || icongalarres1 == "562g.png" || icongalarres1 == "555g.png" || icongalarres1 == "554g.png" || icongalarres1 == "77g.png" || icongalarres1 == "78g.png" || icongalarres1 == "83g.png" || icongalarres1 == "110g.png" || icongalarres1 == "122g.png" || icongalarres1 == "222g.png" || icongalarres1 == "263g.png" || icongalarres1 == "264g.png" || icongalarres1 == "554g.png" || icongalarres1 == "555g.png" || icongalarres1 == "562g.png" || icongalarres1 == "618g.png") {

 document.getElementById("icon2-galar").style.display = "block";

 if (res7 === "77.png") {
  document.getElementById("type2").src = "../types/" + "Feu.png";
  document.getElementById("select2").value = "77";
} else if (res7 === "110.png") {
  document.getElementById("type2").src = "../types/" + "Poison.png";
  document.getElementById("select2").value = "110";
} else if (res7 === "554.png") {
  document.getElementById("type2").src = "../types/" + "Feu.png";
  document.getElementById("select2").value = "554";
} else if (res7 === "555.png") {
  document.getElementById("type2").src = "../types/" + "Feu.png";
  document.getElementById("select2").value = "555";
} else if (res7 === "83.png") {
  document.getElementById("type2").src = "../types/" + "Vol.png";
  document.getElementById("select2").value = "83";
} else if (res7 === "78.png") {
  document.getElementById("type2").src = "../types/" + "Feu.png";
  document.getElementById("select2").value = "78";
} else if (res7 === "122.png") {
  document.getElementById("type2").src = "../types/" + "Fee.png";
  document.getElementById("select2").value = "122";
} else if (res7 === "222.png") {
  document.getElementById("type2").src = "../types/" + "Roche.png";
  document.getElementById("select2").value = "222";
} else if (res7 === "618.png") {
  document.getElementById("type2").src = "../types/" + "Elec.png";
  document.getElementById("select2").value = "618";
} else if (res7 === "263.png") {
  document.getElementById("select2").value = "263";
} else if (res7 === "264.png") {
  document.getElementById("select2").value = "264";
} else if (res7 === "562.png") {
  document.getElementById("select2").value = "562";
} else if (res7 === "79.png") {
  document.getElementById("select2").value = "79";
} else if (res7 === "80.png") {
  document.getElementById("select2").value = "80";
} else if (res7 === "199.png") {
  document.getElementById("select2").value = "199";
} else if (res7 === "144.png") {
  document.getElementById("select2").value = "144";
} else if (res7 === "145.png") {
  document.getElementById("select2").value = "145";
} else if (res7 === "146.png") {
  document.getElementById("select2").value = "146";
}
typeweak();
}
if (iconmegaxres1 == "6mx.png" || iconmegaxres1 == "150mx.png") {

  document.getElementById("icon2-megax").style.display = "block";


  if (res7 === "6.png") {
    document.getElementById("type2").src = "../types/" + "Vol.png";
    document.getElementById("select2").value = "6";
  } else if (res7 === "150.png") {
    document.getElementById("type2").src = "../types/" + "Psy.png";
    document.getElementById("select2").value = "150";
  }
typeweak();
  
}
if (iconmegayres1 == "6my.png" || iconmegayres1 == "150my.png") {

  document.getElementById("icon2-megay").style.display = "block";

  if (res7 === "6.png") {

    document.getElementById("select2").value = "6";
  } else if (res7 === "150.png") {

    document.getElementById("select2").value = "150";
  }
typeweak();
  
}
if (icon1alolares1 == "52a.png") {

  document.getElementById("icon2-alola1").style.display = "block";
  document.getElementById("icon2-galar1").style.display = "block";

  if (res7 === "52.png") {
    document.getElementById("type2").src = "../types/" + "Normal.png";
    document.getElementById("select2").value = "52";
  }
  typeweak();
}
if (icon1galarres1 == "52g.png") {

  document.getElementById("icon2-alola1").style.display = "block";
  document.getElementById("icon2-galar1").style.display = "block";

  if (res7 === "52.png") {
    document.getElementById("type2").src = "../types/" + "Normal.png";
    document.getElementById("select2").value = "52";
  }
  typeweak();
}
if (icongiganres1 == "809_1.png" || icongiganres1 == "3_1.png" || icongiganres1 == "6_1.png" || icongiganres1 == "9_1.png" || icongiganres1 == "12_1.png" || icongiganres1 == "25_1.png" || icongiganres1 == "52_1.png" || icongiganres1 == "68_1.png" || icongiganres1 == "94_1.png" || icongiganres1 == "99_1.png" || icongiganres1 == "131_1.png" || icongiganres1 == "133_1.png" || icongiganres1 == "143_1.png" || icongiganres1 == "569_1.png" || icongiganres1 == "812_1.png" || icongiganres1 == "815_1.png" || icongiganres1 == "818_1.png" || icongiganres1 == "823_1.png" || icongiganres1 == "826_1.png" || icongiganres1 == "834_1.png" || icongiganres1 == "839_1.png" || icongiganres1 == "842_1.png" || icongiganres1 == "844_1.png" || icongiganres1 == "849_1.png" || icongiganres1 == "851_1.png" || icongiganres1 == "858_1.png" || icongiganres1 == "861_1.png" || icongiganres1 == "869_1.png" || icongiganres1 == "879_1.png" || icongiganres1 == "884_1.png" || icongiganres1 == "892_1.png") {

  document.getElementById("icon2-gigan").style.display = "block";

  if (res7 === "3.png") {
    document.getElementById("select2").value = "3";

  } else if (res7 === "809.png") {
    document.getElementById("select2").value = "809";

  } else if (res7 === "6.png") {
    document.getElementById("select2").value = "6";

  } else if (res7 === "9.png") {
    document.getElementById("select2").value = "9";

  } else if (res7 === "12.png") {
    document.getElementById("select2").value = "12";

  } else if (res7 === "25.png") {
    document.getElementById("select2").value = "25";

  } else if (res7 === "52.png") {
    document.getElementById("select2").value = "52";

  } else if (res7 === "68.png") {
    document.getElementById("select2").value = "68";

  } else if (res7 === "94.png") {
    document.getElementById("select2").value = "94";

  } else if (res7 === "99.png") {
    document.getElementById("select2").value = "99";

  } else if (res7 === "131.png") {
    document.getElementById("select2").value = "131";

  } else if (res7 === "133.png") {
    document.getElementById("select2").value = "133";

  } else if (res7 === "143.png") {
    document.getElementById("select2").value = "143";

  } else if (res7 === "569.png") {
    document.getElementById("select2").value = "569";

  } else if (res7 === "812.png") {
    document.getElementById("select2").value = "812";

  } else if (res7 === "815.png") {
    document.getElementById("select2").value = "815";

  } else if (res7 === "818.png") {
    document.getElementById("select2").value = "818";

  } else if (res7 === "823.png") {
    document.getElementById("select2").value = "823";

  } else if (res7 === "839.png") {
    document.getElementById("select2").value = "839";

  } else if (res7 === "826.png") {
    document.getElementById("select2").value = "826";

  } else if (res7 === "834.png") {
    document.getElementById("select2").value = "834";

  } else if (res7 === "842.png") {
    document.getElementById("select2").value = "842";

  } else if (res7 === "844.png") {
    document.getElementById("select2").value = "844";

  } else if (res7 === "849.png") {
    document.getElementById("select2").value = "849";

  } else if (res7 === "851.png") {
    document.getElementById("select2").value = "851";

  } else if (res7 === "858.png") {
    document.getElementById("select2").value = "858";

  } else if (res7 === "861.png") {
    document.getElementById("select2").value = "861";

  } else if (res7 === "869.png") {
    document.getElementById("select2").value = "869";

  } else if (res7 === "879.png") {
    document.getElementById("select2").value = "879";

  } else if (res7 === "884.png") {
    document.getElementById("select2").value = "884";

  } else if (res7 === "892.png") {
    document.getElementById("select2").value = "892";

  }
  typeweak();
}
if (iconaltformres1 == "889_1.png" || iconaltformres1 == "888_1.png" || iconaltformres1 == "877_1.png" || iconaltformres1 == "875_1.png" || iconaltformres1 == "800_1.png" || iconaltformres1 == "746_1.png" || iconaltformres1 == "745_1.png" || iconaltformres1 == "741_1.png" || iconaltformres1 == "718_1.png" || iconaltformres1 == "658_1.png" || iconaltformres1 == "720_1.png" || iconaltformres1 == "648_1.png" || iconaltformres1 == "647_1.png" || iconaltformres1 == "645_1.png" || iconaltformres1 == "642_1.png" || iconaltformres1 == "641_1.png" || iconaltformres1 == "586_1.png" || iconaltformres1 == "585_1.png" || iconaltformres1 == "555_1.png" || iconaltformres1 == "550_1.png" || iconaltformres1 == "492_1.png" || iconaltformres1 == "487_1.png" || iconaltformres1 == "351_1.png" || iconaltformres1 == "386_1.png" || iconaltformres1 == "249_1.png" || iconaltformres1 == "412_1.png" || iconaltformres1 == "413_1.png" || iconaltformres1 == "421_1.png" || iconaltformres1 == "422_1.png" || iconaltformres1 == "423_1.png" || iconaltformres1 == "479_1.png") {

  document.getElementById("icon2-altform").style.display = "block";

  if (res7 === "351.png") {

    document.getElementById("select2").value = "351";
    document.getElementById("type2").src = "../types/" + "Normal.png";

  } else if (res7 === "386.png") {

    document.getElementById("select2").value = "386";

  } else if (res7 === "249.png") {

    document.getElementById("select2").value = "249";

  } else if (res7 === "412.png") {

    document.getElementById("select2").value = "412";

  } else if (res7 === "413.png") {

    document.getElementById("select2").value = "413";
    document.getElementById("type2").src = "../types/" + "Plante.png";

  } else if (res7 === "421.png") {

    document.getElementById("select2").value = "421";

  } else if (res7 === "422.png") {

    document.getElementById("select2").value = "422";

  } else if (res7 === "423.png") {

    document.getElementById("select2").value = "423";

  } else if (res7 === "479.png") {

    document.getElementById("select2").value = "479";
    document.getElementById("type2").src = "../types/" + "Spectre.png";

  } else if (res7 === "487.png") {

    document.getElementById("select2").value = "487";

  } else if (res7 === "492.png") {

    document.getElementById("select2").value = "492";
    document.getElementById("type2").src = "../types/" + "Plante.png";

  } else if (res7 === "550.png") {

    document.getElementById("select2").value = "550";

  } else if (res7 === "555.png") {

    document.getElementById("select2").value = "555";

  } else if (res7 === "585.png") {

    document.getElementById("select2").value = "585";

  } else if (res7 === "586.png") {

    document.getElementById("select2").value = "586";

  } else if (res7 === "641.png") {

    document.getElementById("select2").value = "641";

  } else if (res7 === "642.png") {

    document.getElementById("select2").value = "642";

  } else if (res7 === "645.png") {

    document.getElementById("select2").value = "645";

  } else if (res7 === "647.png") {

    document.getElementById("select2").value = "647";

  } else if (res7 === "648.png") {
    document.getElementById("select2").value = "648";
    document.getElementById("type2").src = "../types/" + "Psy.png";
  } else if (res7 === "720.png") {
    document.getElementById("select2").value = "720";
    document.getElementById("type2").src = "../types/" + "Spectre.png";
  } else if (res7 === "658.png") {
    document.getElementById("select2").value = "658";
    document.getElementById("suffix").innerHTML = "inobi";
  } else if (res7 === "718.png") {
    document.getElementById("select2").value = "718";
  } else if (res7 === "741.png") {
    document.getElementById("select2").value = "741";
  } else if (res7 === "745.png") {
    document.getElementById("select2").value = "745";
  } else if (res7 === "746.png") {
    document.getElementById("select2").value = "746";
  } else if (res7 === "800.png") {
    document.getElementById("select2").value = "800";
    document.getElementById("type2").src = "../types/" + "Psy.png";
  } else if (res7 === "875.png") {
    document.getElementById("select2").value = "875";
  } else if (res7 === "877.png") {
    document.getElementById("select2").value = "877";
  } else if (res7 === "888.png") {
    document.getElementById("select2").value = "888";
  } else if (res7 === "889.png") {
    document.getElementById("select2").value = "889";
    document.getElementById("type2").src = "../types/" + "Combat.png";
  }
typeweak();
  
}
if (iconaltform2res1 == "892_2.png" || iconaltform2res1 == "849_2.png" || iconaltform2res1 == "745_2.png" || iconaltform2res1 == "741_2.png" || iconaltform2res1 == "718_2.png" || iconaltform2res1 == "586_2.png" || iconaltform2res1 == "585_2.png" || iconaltform2res1 == "351_2.png" || iconaltform2res1 == "386_2.png" || iconaltform2res1 == "412_2.png" || iconaltform2res1 == "413_2.png" || iconaltform2res1 == "479_2.png") {

  document.getElementById("icon2-altform2").style.display = "block";

  if (res7 === "351.png") {

    document.getElementById("select2").value = "351";
    document.getElementById("type2").src = "../types/" + "Normal.png";

  } else if (res7 === "386.png") {

    document.getElementById("select2").value = "386";

  } else if (res7 === "412.png") {

    document.getElementById("select2").value = "412";

  } else if (res7 === "413.png") {

    document.getElementById("select2").value = "413";
    document.getElementById("type2").src = "../types/" + "Plante.png";

  } else if (res7 === "479.png") {

    document.getElementById("select2").value = "479";
    document.getElementById("type2").src = "../types/" + "Spectre.png";

  } else if (res7 === "585.png") {

    document.getElementById("select2").value = "585";

  } else if (res7 === "586.png") {

    document.getElementById("select2").value = "586";

  } else if (res7 === "718.png") {
    document.getElementById("select2").value = "718";
  } else if (res7 === "741.png") {
    document.getElementById("select2").value = "741";
  } else if (res7 === "745.png") {
    document.getElementById("select2").value = "745";
  } else if (res7 === "849.png") {
    document.getElementById("select2").value = "849";
  } else if (res7 === "892.png") {
    document.getElementById("select2").value = "892";
  }
typeweak();
  
}
if (iconaltform3res1 == "892_3.png" || iconaltform3res1 == "741_3.png" || iconaltform3res1 == "586_3.png" || iconaltform3res1 == "585_3.png" || iconaltform3res1 == "351_3.png" || iconaltform3res1 == "386_3.png" || iconaltform3res1 == "479_3.png") {

  document.getElementById("icon2-altform3").style.display = "block";

  if (res7 === "351.png") {

    document.getElementById("select2").value = "351";
    document.getElementById("type2").src = "../types/" + "Normal.png";

  } else if (res7 === "386.png") {

    document.getElementById("select2").value = "386";

  } else if (res7 === "479.png") {

    document.getElementById("select2").value = "479";
    document.getElementById("type2").src = "../types/" + "Spectre.png";

  } else if (res7 === "585.png") {

    document.getElementById("select2").value = "585";

  } else if (res7 === "586.png") {
    document.getElementById("select2").value = "586";
  } else if (res7 === "741.png") {
    document.getElementById("select2").value = "741";
  } else if (res7 === "892.png") {
    document.getElementById("select2").value = "892";
  }
typeweak();
  
}
if (iconaltform4res1 == "479_4.png") {

  document.getElementById("icon2-altform4").style.display = "block";

  if (res7 === "479.png") {
    document.getElementById("select2").value = "479";
    document.getElementById("type2").src = "../types/" + "Spectre.png";
  }
typeweak();
  
}
if (iconaltform5res1 == "479_5.png") {

  document.getElementById("icon2-altform5").style.display = "block";

  if (res7 === "479.png") {
    document.getElementById("select2").value = "479";
    document.getElementById("type2").src = "../types/" + "Spectre.png";
  }
typeweak();
  
}
if (iconaltgalarform2res1 == "555g_2.png") {
  document.getElementById("icon2-altgalarform2").style.display = "block";
  if (res7 === "555.png") {

    document.getElementById("select2").value = "555";

  }
  typeweak();
}
}

function iconMega2() {

  var alolapic2 = document.getElementById("pic2").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var megares2 = alolares1.replace(".png", "m.png");
  var alolares5 = alolares4.replace(/.png|m.png/, "m.png");
  document.getElementById("pic2").src = "../sprites/" + megares2;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("megaoui").innerHTML = "Mega ";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2-mega").style.display = "none";
  document.getElementById("icon2").style.display = "block";

  if (megares2 === "127m.png") {
    document.getElementById("type2").src = "../types/" + "Vol.png";
    document.getElementById("select2").value = "127m";
  } else if (megares2 === "130m.png") {
    document.getElementById("type2").src = "../types/" + "Tenebres.png";
    document.getElementById("select2").value = "130m";
  } else if (megares2 === "181m.png") {
    document.getElementById("type2").src = "../types/" + "Dragon.png";
    document.getElementById("select2").value = "181m";
  } else if (megares2 === "306m.png") {
    document.getElementById("type2").src = "../types/" + "Acier.png";
    document.getElementById("select2").value = "306m";
  } else if (megares2 === "334m.png") {
    document.getElementById("type2").src = "../types/" + "Fee.png";
    document.getElementById("select2").value = "334m";
  } else if (megares2 === "383m.png") {
    document.getElementById("type2").src = "../types/" + "Feu.png";
    document.getElementById("select2").value = "383m";
    document.getElementById("megaoui").innerHTML = "Primo ";
  } else if (megares2 === "428m.png") {
    document.getElementById("type2").src = "../types/" + "Combat.png";
    document.getElementById("select2").value = "428m";
  } else if (megares2 === "254m.png") {
    document.getElementById("type2").src = "../types/" + "Dragon.png";
    document.getElementById("select2").value = "254m";
  } else if (megares2 === "531m.png") {
    document.getElementById("type2").src = "../types/" + "Fee.png";
    document.getElementById("select2").value = "531m";
  } else if (megares2 === "115m.png") {

    document.getElementById("select2").value = "115m";
  } else if (megares2 === "9m.png") {

    document.getElementById("select2").value = "9m";
  } else if (megares2 === "94m.png") {

    document.getElementById("select2").value = "94m";
  } else if (megares2 === "381m.png") {

    document.getElementById("select2").value = "381m";
  } else if (megares2 === "719m.png") {

    document.getElementById("select2").value = "719m";
  } else if (megares2 === "80m.png") {

    document.getElementById("select2").value = "80m";
  } else if (megares2 === "15m.png") {

    document.getElementById("select2").value = "15m";
  } else if (megares2 === "373m.png") {

    document.getElementById("select2").value = "373m";
  } else if (megares2 === "359m.png") {

    document.getElementById("select2").value = "359m";
  } else if (megares2 === "448m.png") {

    document.getElementById("select2").value = "448m";
  } else if (megares2 === "229m.png") {

    document.getElementById("select2").value = "229m";
  } else if (megares2 === "303m.png") {

    document.getElementById("select2").value = "303m";
  } else if (megares2 === "65m.png") {

    document.getElementById("select2").value = "65m";
  } else if (megares2 === "384m.png") {

    document.getElementById("select2").value = "384m";
  } else if (megares2 === "382m.png") {

    document.getElementById("select2").value = "382m";
    document.getElementById("megaoui").innerHTML = "Primo ";
  } else if (megares2 === "282m.png") {

    document.getElementById("select2").value = "282m";
  } else if (megares2 === "362m.png") {

    document.getElementById("select2").value = "362m";
  } else if (megares2 === "248m.png") {

    document.getElementById("select2").value = "248m";
  } else if (megares2 === "475m.png") {

    document.getElementById("select2").value = "475m";
  } else if (megares2 === "214m.png") {

    document.getElementById("select2").value = "214m";
  } else if (megares2 === "260m.png") {

    document.getElementById("select2").value = "260m";
  } else if (megares2 === "280m.png") {

    document.getElementById("select2").value = "280m";
  } else if (megares2 === "142m.png") {

    document.getElementById("select2").value = "142m";
  } else if (megares2 === "354m.png") {

    document.getElementById("select2").value = "354m";
  } else if (megares2 === "460m.png") {

    document.getElementById("select2").value = "460m";
  } else if (megares2 === "18m.png") {

    document.getElementById("select2").value = "18m";
  } else if (megares2 === "380m.png") {

    document.getElementById("select2").value = "380m";
  } else if (megares2 === "212m.png") {

    document.getElementById("select2").value = "212m";
  } else if (megares2 === "319m.png") {

    document.getElementById("select2").value = "319m";
  } else if (megares2 === "445m.png") {

    document.getElementById("select2").value = "445m";
  } else if (megares2 === "208m.png") {

    document.getElementById("select2").value = "208m";
  } else if (megares2 === "302m.png") {

    document.getElementById("select2").value = "302m";
  } else if (megares2 === "308m.png") {

    document.getElementById("select2").value = "308m";
  } else if (megares2 === "310m.png") {
    document.getElementById("select2").value = "310m";
  } else if (megares2 === "257m.png") {
    document.getElementById("select2").value = "257m";
  }

    typeweak();

}

function iconGigan2() {

  var alolapic2 = document.getElementById("pic2").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(".png", "_1.png");
  var alolares5 = alolares4.replace(/.png|_1.png/, "_1.png");
  document.getElementById("pic2").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("Gigantamax").innerHTML = " Gigantamax";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2-gigan").style.display = "none";
  document.getElementById("icon2-mega").style.display = "none";
  document.getElementById("icon2-megax").style.display = "none";
  document.getElementById("icon2-megay").style.display = "none";
  document.getElementById("icon2-alola1").style.display = "none";
  document.getElementById("icon2-galar1").style.display = "none";
  document.getElementById("icon2").style.display = "block";

  if (alolares3 === "3_1.png"){

    document.getElementById("select2").value = "3_1";

  } else if (alolares3 === "809_1.png") {
    document.getElementById("select2").value = "809_1";

  } else if (alolares3 === "6_1.png") {
    document.getElementById("select2").value = "6_1";

  } else if (alolares3 === "9_1.png") {
    document.getElementById("select2").value = "9_1";

  } else if (alolares3 === "12_1.png") {
    document.getElementById("select2").value = "12_1";

  } else if (alolares3 === "25_1.png") {
    document.getElementById("select2").value = "25_1";

  } else if (alolares3 === "52_1.png") {
    document.getElementById("select2").value = "52_1";

  } else if (alolares3 === "68_1.png") {
    document.getElementById("select2").value = "68_1";

  } else if (alolares3 === "94_1.png") {
    document.getElementById("select2").value = "94_1";

  } else if (alolares3 === "99_1.png") {
    document.getElementById("select2").value = "99_1";

  } else if (alolares3 === "131_1.png") {
    document.getElementById("select2").value = "131_1";

  } else if (alolares3 === "133_1.png") {
    document.getElementById("select2").value = "133_1";

  } else if (alolares3 === "143_1.png") {
    document.getElementById("select2").value = "143_1";

  } else if (alolares3 === "569_1.png") {
    document.getElementById("select2").value = "569_1";

  } else if (alolares3 === "812_1.png") {
    document.getElementById("select2").value = "812_1";

  } else if (alolares3 === "815_1.png") {
    document.getElementById("select2").value = "815_1";

  } else if (alolares3 === "818_1.png") {
    document.getElementById("select2").value = "818_1";

  } else if (alolares3 === "823_1.png") {
    document.getElementById("select2").value = "823_1";

  } else if (alolares3 === "826_1.png") {
    document.getElementById("select2").value = "826_1";

  } else if (alolares3 === "834_1.png") {
    document.getElementById("select2").value = "834_1";

  } else if (alolares3 === "839_1.png") {
    document.getElementById("select2").value = "839_1";

  } else if (alolares3 === "842_1.png") {
    document.getElementById("select2").value = "842_1";

  } else if (alolares3 === "844_1.png") {
    document.getElementById("select2").value = "844_1";

  } else if (alolares3 === "849_1.png") {
    document.getElementById("select2").value = "849_1";

  } else if (alolares3 === "851_1.png") {
    document.getElementById("select2").value = "851_1";

  } else if (alolares3 === "858_1.png") {
    document.getElementById("select2").value = "858_1";

  } else if (alolares3 === "861_1.png") {
    document.getElementById("select2").value = "861_1";

  } else if (alolares3 === "869_1.png") {
    document.getElementById("select2").value = "869_1";

  } else if (alolares3 === "879_1.png") {
    document.getElementById("select2").value = "879_1";

  } else if (alolares3 === "884_1.png") {
    document.getElementById("select2").value = "884_1";

  } else if (alolares3 === "892_1.png") {
    document.getElementById("select2").value = "892_1";

  }

    typeweak();

}

function iconGalar2() {

  var galarpic2 = document.getElementById("pic2").src;
  var galarpic3 = document.getElementById("pic3").src;
  var galarres1 = galarpic2.substr(60);
  var galarres4 = galarpic3.substr(66);
  var alolares3 = galarres1.replace(/.png|a.png/, "g.png");
  var galarres5 = galarres4.replace(/.png|g.png|a.png/, "g.png");
  document.getElementById("pic2").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + galarres5;
  document.getElementById("galar").innerHTML = "Galarian ";
  document.getElementById("alola").innerHTML = "";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2-galar").style.display = "none";
  document.getElementById("icon2").style.display = "block";

  if (alolares3 === "77g.png") {
    document.getElementById("type2").src = "../types/" + "Psy.png";
    document.getElementById("select2").value = "77g";
  } else if (alolares3 === "110g.png") {
    document.getElementById("type2").src = "../types/" + "Fee.png";
    document.getElementById("select2").value = "110g";
  } else if (alolares3 === "83g.png") {
    document.getElementById("type2").src = "../types/" + "Combat.png";
    document.getElementById("select2").value = "83g";
  } else if (alolares3 === "78g.png") {
    document.getElementById("type2").src = "../types/" + "Fee.png";
    document.getElementById("select2").value = "78g";
  } else if (alolares3 === "618g.png") {
    document.getElementById("type2").src = "../types/" + "Acier.png";
    document.getElementById("select2").value = "618g";
  } else if (alolares3 === "122g.png") {
    document.getElementById("type2").src = "../types/" + "Psy.png";
    document.getElementById("select2").value = "122g";
  } else if (alolares3 === "222g.png") {
    document.getElementById("type2").src = "../types/" + "Spectre.png";
    document.getElementById("select2").value = "222g";
  } else if (alolares3 === "554g.png") {
    document.getElementById("type2").src = "../types/" + "Glace.png";
    document.getElementById("select2").value = "554g";
  } else if (alolares3 === "555g.png") {
    document.getElementById("type2").src = "../types/" + "Glace.png";
    document.getElementById("select2").value = "555g";
  } else if (alolares3 === "263g.png") {
    document.getElementById("select2").value = "263g";
  } else if (alolares3 === "264g.png") {
    document.getElementById("select2").value = "264g";
  } else if (alolares3 === "562g.png") {
    document.getElementById("select2").value = "562g";
  } else if (alolares3 === "79g.png") {
    document.getElementById("select2").value = "79g";
  } else if (alolares3 === "80g.png") {
    document.getElementById("select2").value = "80g";
  } else if (alolares3 === "199g.png") {
    document.getElementById("select2").value = "199g";
  } else if (alolares3 === "144g.png") {
    document.getElementById("select2").value = "144g";
  } else if (alolares3 === "145g.png") {
    document.getElementById("select2").value = "144g";
  } else if (alolares3 === "146g.png") {
    document.getElementById("select2").value = "145g";
  }
    typeweak();

}

function iconGalarMiaouss2() {

  var galarpic2 = document.getElementById("pic2").src;
  var galarpic3 = document.getElementById("pic3").src;
  var galarres1 = galarpic2.substr(60);
  var galarres4 = galarpic3.substr(66);
  var galarres3 = galarres1.replace(/.png|a.png/, "g.png");
  var galarres5 = galarres4.replace(/.png|g.png|a.png/, "g.png");
  document.getElementById("pic2").src = "../sprites/" + galarres3;
  document.getElementById("pic3").src = "../sprites/fused/" + galarres5;
  document.getElementById("galar").innerHTML = "Galarian ";
  document.getElementById("alola").innerHTML = "";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2-galar1").style.display = "none";
  document.getElementById("icon2-alola1").style.display = "none";
  document.getElementById("icon2").style.display = "block";

if (galarres3 === "52g.png") {
    document.getElementById("type2").src = "../types/" + "Acier.png";
    document.getElementById("select2").value = "52g";
  }
    typeweak();

}

function iconMega2X() {

  var alolapic2 = document.getElementById("pic2").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var megares2 = alolares1.replace(".png", "mx.png");
  var alolares5 = alolares4.replace(/.png|mx.png/, "mx.png");
  document.getElementById("pic2").src = "../sprites/" + megares2;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("megaoui").innerHTML = "Mega ";
  document.getElementById("megaouixy").innerHTML = " X";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2-megax").style.display = "none";
  document.getElementById("icon2").style.display = "block";
  document.getElementById("icon2-megay").style.display = "none";
  document.getElementById("icon2-gigan").style.display = "none";

  if (megares2 === "6mx.png") {
    document.getElementById("type2").src = "../types/" + "Dragon.png";
    document.getElementById("select2").value = "6mx";
  } else if (megares2 === "150mx.png") {
    document.getElementById("type2").src = "../types/" + "Combat.png";
    document.getElementById("select2").value = "150mx";
  }
  typeweak();
}

function iconMega2Y() {

  var alolapic2 = document.getElementById("pic2").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var megares2 = alolares1.replace(".png", "my.png");
  var alolares5 = alolares4.replace(/.png|my.png/, "my.png");
  document.getElementById("pic2").src = "../sprites/" + megares2;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("megaoui").innerHTML = "Mega ";
  document.getElementById("megaouixy").innerHTML = " Y";
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2-megay").style.display = "none";
  document.getElementById("icon2").style.display = "block";
  document.getElementById("icon2-megax").style.display = "none";
  document.getElementById("icon2-gigan").style.display = "none";

  if (megares2 === "6my.png") {

    document.getElementById("select2").value = "6my";
  } else if (megares2 === "150my.png") {

    document.getElementById("select2").value = "150my";
  }
  typeweak();
}

function icon2AltForm(){

  var alolapic2 = document.getElementById("pic2").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(".png", "_1.png");
  var alolares5 = alolares4.replace(/.png|_1.png/, "_1.png");
  document.getElementById("pic2").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2").style.display = "block";
  document.getElementById("icon2-galar").style.display = "none";
  document.getElementById("icon2-altform").style.display = "none";
  document.getElementById("icon2-altform2").style.display = "none";
  document.getElementById("icon2-altform3").style.display = "none";
  document.getElementById("icon2-altform4").style.display = "none";
  document.getElementById("icon2-altform5").style.display = "none";

  if (alolares3 === "351_1.png") {
    document.getElementById("select2").value = "351_1";
    document.getElementById("type2").src = "../types/" + "Feu.png";
  } else if (alolares3 === "386_1.png") {
    document.getElementById("select2").value = "386_1";
  } else if (alolares3 === "249_1.png") {
    document.getElementById("select2").value = "249_1";
  } else if (alolares3 === "412_1.png") {
    document.getElementById("select2").value = "412_1";
  } else if (alolares3 === "413_1.png") {
    document.getElementById("select2").value = "413_1";
    document.getElementById("type2").src = "../types/" + "Sol.png";
  } else if (alolares3 === "421_1.png") {
    document.getElementById("select2").value = "421_1";
  } else if (alolares3 === "422_1.png") {
    document.getElementById("select2").value = "422_1";
  } else if (alolares3 === "423_1.png") {
    document.getElementById("select2").value = "423_1";
  } else if (alolares3 === "479_1.png") {
    document.getElementById("select2").value = "479_1";
    document.getElementById("type2").src = "../types/" + "Vol.png";
  } else if (alolares3 === "487_1.png") {
    document.getElementById("select2").value = "487_1";
  } else if (alolares3 === "492_1.png") {
    document.getElementById("select2").value = "492_1";
    document.getElementById("type2").src = "../types/" + "Vol.png";
  } else if (alolares3 === "550_1.png") {
    document.getElementById("select2").value = "550_1";
  } else if (alolares3 === "555_1.png") {
    document.getElementById("select2").value = "555_1";
  } else if (alolares3 === "585_1.png") {
    document.getElementById("select2").value = "585_1";
  } else if (alolares3 === "586_1.png") {
    document.getElementById("select2").value = "586_1";
  } else if (alolares3 === "641_1.png") {
    document.getElementById("select2").value = "641_1";
  } else if (alolares3 === "642_1.png") {
    document.getElementById("select2").value = "642_1";
  } else if (alolares3 === "645_1.png") {
    document.getElementById("select2").value = "645_1";
  } else if (alolares3 === "647_1.png") {
    document.getElementById("select2").value = "647_1";
  } else if (alolares3 === "648_1.png") {
    document.getElementById("select2").value = "648_1";
    document.getElementById("type2").src = "../types/" + "Combat.png";
  } else if (alolares3 === "720_1.png") {
    document.getElementById("select2").value = "720_1";
    document.getElementById("type2").src = "../types/" + "Tenebres.png";
  } else if (alolares3 === "658_1.png") {
    document.getElementById("select2").value = "658_1";
    document.getElementById("suffix").innerHTML = "nobi";
  } else if (alolares3 === "718_1.png") {
    document.getElementById("select2").value = "718_1";
  } else if (alolares3 === "741_1.png") {
    document.getElementById("select2").value = "741_1";
  } else if (alolares3 === "745_1.png") {
    document.getElementById("select2").value = "745_1";
  } else if (alolares3 === "746_1.png") {
    document.getElementById("select2").value = "746_1";
  } else if (alolares3 === "800_1.png") {
    document.getElementById("select2").value = "800_1";
    document.getElementById("type2").src = "../types/" + "Dragon.png";
  } else if (alolares3 === "875_1.png") {
    document.getElementById("select2").value = "875_1";
  } else if (alolares3 === "877_1.png") {
    document.getElementById("select2").value = "877_1";
  } else if (alolares3 === "888_1.png") {
    document.getElementById("select2").value = "888_1";
  } else if (alolares3 === "889_1.png") {
    document.getElementById("select2").value = "889_1";
    document.getElementById("type2").src = "../types/" + "Acier.png";
  }
  typeweak();
}

function icon2AltForm2(){
  
  var alolapic2 = document.getElementById("pic2").src;

  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);

  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(/.png|g_2.png/, "_2.png");

  var alolares5 = alolares4.replace(/.png|_2.png|g_2.png/, "_2.png");
  document.getElementById("pic2").src = "../sprites/" + alolares3;

  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2").style.display = "block";
  document.getElementById("icon2-altform").style.display = "none";
  document.getElementById("icon2-altform2").style.display = "none";
  document.getElementById("icon2-altform3").style.display = "none";
  document.getElementById("icon2-altform4").style.display = "none";
  document.getElementById("icon2-altform5").style.display = "none";
  document.getElementById("icon2-galar").style.display = "none";
  document.getElementById("icon2-gigan").style.display = "none";
  document.getElementById("icon2-mega").style.display = "none";

  if (alolares3 === "351_2.png") {
    document.getElementById("select2").value = "351_2";
    document.getElementById("type2").src = "../types/" + "Eau.png";
  } else if (alolares3 === "386_2.png") {
    document.getElementById("select2").value = "386_2";
  }    else if (alolares3 === "412_2.png") {
    document.getElementById("select2").value = "412_2";
  }    else if (alolares3 === "413_2.png") {
    document.getElementById("select2").value = "413_2";
    document.getElementById("type2").src = "../types/" + "Acier.png";
  } else if (alolares3 === "479_2.png") {
    document.getElementById("select2").value = "479_2";
    document.getElementById("type2").src = "../types/" + "Glace.png";
  } else if (alolares3 === "585_2.png") {
    document.getElementById("select2").value = "585_2";
  } else if (alolares3 === "586_2.png") {
    document.getElementById("select2").value = "586_2";
  } else if (alolares3 === "718_2.png") {
    document.getElementById("select2").value = "718_2";
  } else if (alolares3 === "741_2.png") {
    document.getElementById("select2").value = "741_2";
  } else if (alolares3 === "745_2.png") {
    document.getElementById("select2").value = "745_2";
  } else if (alolares3 === "849_2.png") {
    document.getElementById("select2").value = "849_2";
  } else if (alolares3 === "892_2.png") {
    document.getElementById("select2").value = "892_2";
  }
  typeweak();
}

function icon2AltGalarForm2(){
  
  var alolapic2 = document.getElementById("pic2").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var galarres6 = alolares1.replace(/.png|g_2.png/, "g_2.png");
  var alolares5 = alolares4.replace(/.png|_2.png|g_2.png/, "g_2.png");
  document.getElementById("pic2").src = "../sprites/" + galarres6;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2").style.display = "block";
  document.getElementById("icon2-altform").style.display = "none";
  document.getElementById("icon2-altform2").style.display = "none";
  document.getElementById("icon2-altgalarform2").style.display = "none";
  document.getElementById("icon2-altform3").style.display = "none";
  document.getElementById("icon2-altform4").style.display = "none";
  document.getElementById("icon2-altform5").style.display = "none";
  document.getElementById("icon2-galar").style.display = "none";

  if (galarres6 === "555g_2.png") {
    document.getElementById("select2").value = "555g_2";
    document.getElementById("galar").innerHTML = "Galarian ";
  }
  typeweak();
}

function icon2AltForm3(){
  
  var alolapic2 = document.getElementById("pic2").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(".png", "_3.png");
  var alolares5 = alolares4.replace(/.png|_3.png/, "_3.png");
  document.getElementById("pic2").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2").style.display = "block";
  document.getElementById("icon2-altform").style.display = "none";
  document.getElementById("icon2-altform2").style.display = "none";
  document.getElementById("icon2-altform3").style.display = "none";
  document.getElementById("icon2-altform4").style.display = "none";
  document.getElementById("icon2-altform5").style.display = "none";
  document.getElementById("icon2-gigan").style.display = "none";

  if (alolares3 === "351_3.png") {
    document.getElementById("select2").value = "351_3";
    document.getElementById("type2").src = "../types/" + "Glace.png";
  } else if (alolares3 === "386_3.png") {
    document.getElementById("select2").value = "386_3";
  } else if (alolares3 === "479_3.png") {
    document.getElementById("select2").value = "479_3";
    document.getElementById("type2").src = "../types/" + "Feu.png";
  } else if (alolares3 === "585_3.png") {
    document.getElementById("select2").value = "585_3";
  } else if (alolares3 === "586_3.png") {
    document.getElementById("select2").value = "586_3";
  } else if (alolares3 === "741_3.png") {
    document.getElementById("select2").value = "741_3";
  } else if (alolares3 === "892_3.png") {
    document.getElementById("select2").value = "892_3";
  }
  typeweak();
}

function icon2AltForm4(){
  
  var alolapic2 = document.getElementById("pic2").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(".png", "_4.png");
  var alolares5 = alolares4.replace(/.png|_4.png/, "_4.png");
  document.getElementById("pic2").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2").style.display = "block";
  document.getElementById("icon2-altform").style.display = "none";
  document.getElementById("icon2-altform2").style.display = "none";
  document.getElementById("icon2-altform3").style.display = "none";
  document.getElementById("icon2-altform4").style.display = "none";
  document.getElementById("icon2-altform5").style.display = "none";

if (alolares3 === "479_4.png") {
    document.getElementById("select2").value = "479_4";
    document.getElementById("type2").src = "../types/" + "Plante.png";
  }
  typeweak();
}

function icon2AltForm5(){
  
  var alolapic2 = document.getElementById("pic2").src;
  var alolapic3 = document.getElementById("pic3").src;
  var alolares1 = alolapic2.substr(32);
  var alolares4 = alolapic3.substr(66);
  var alolares3 = alolares1.replace(".png", "_5.png");
  var alolares5 = alolares4.replace(/.png|_5.png/, "_5.png");
  document.getElementById("pic2").src = "../sprites/" + alolares3;
  document.getElementById("pic3").src = "../sprites/fused/" + alolares5;
  document.getElementById("select1").disabled = true;
  document.getElementById("select2").disabled = true;
  document.getElementById("icon2").style.display = "block";
  document.getElementById("icon2-altform").style.display = "none";
  document.getElementById("icon2-altform2").style.display = "none";
  document.getElementById("icon2-altform3").style.display = "none";
  document.getElementById("icon2-altform4").style.display = "none";
  document.getElementById("icon2-altform5").style.display = "none";

if (alolares3 === "479_5.png") {
    document.getElementById("select2").value = "479_5";
    document.getElementById("type2").src = "../types/" + "Eau.png";
  }
  typeweak();
}
