// entrada entrada por consola sin librerías
const ask = (msg) => {
  return new Promise((resolve) => {
    process.stdout.write(msg);
    
    process.stdin.once('data', (data) => {
      const res = data.toString().trim();
      resolve(res);
    });
  });
};


const main = async () => {
    let personas = [];
    let continuar = true;
    let iterator = 1;

    console.log("\n===== REGISTRO DE PERSONAS =====\n");
    console.log("Ingrese los datos de cada persona");
    console.log("(Para terminar escriba 'finalizar' o 'terminado')\n");

    while (continuar) {
        console.log(`\n----- Persona N°${iterator} -----`);
        
        const nombre = await ask("Nombre: ");
        if (["finalizar", "terminado"].includes(nombre.toLowerCase())) {
            continuar = false;
            continue;
        }

        const edad = parseInt(await ask("Edad: "));
        const nota = parseFloat(await ask("Nota: "));
        const persona = [iterator, nombre, edad, nota];
        
        personas.push(persona);
        iterator++;
    }

    if (personas.length === 0) {
        console.log("\nNo se ingresaron datos.");
        process.exit(0);
    }

    console.log("\n\n========= LISTADO ORIGINAL =========");
    personas.forEach(p => {
        console.log(`${p[0]} | ${p[1]} | ${p[2]} | ${p[3]}`);
    });

    
    console.log("\n\n======= ORDENADO POR NOTA ========");
    console.log("\nID | NOMBRE      | EDAD | NOTA");
    console.log("--------------------------------");
    [...personas]
    .sort((a, b) => b[3] - a[3]) // nota en indice 3
    .forEach(p => {
                console.log(`${p[0]} | ${p[1]} | ${p[2]} | ${p[3]}`);
            });

    process.exit(0);
}

main();