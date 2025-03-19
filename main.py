def main():
    data = []
    i = 1
    
    print("\n== REGISTRO DE PERSONAS ==")
    
    while True:
        print(f"\nPersona {i}")
        
        name = input("Nombre: ")
        if name.lower() in ["finalizar", "terminado"]:
            break
            
        try:
            age = int(input("Edad: "))
            grade = float(input("Nota: "))
            data.append([i, name, age, grade])
            i += 1
        except ValueError:
            print("Error: Ingrese valores numéricos válidos")
    
    if not data:
        print("No hay datos")
        return
    
    print("\n== LISTA ORIGINAL ==")
    for p in data:
        print(f"{p[0]} | {p[1]} | {p[2]} | {p[3]:.1f}")
    
    print("\n== LISTA ORDENADA POR NOTA ==")
    for p in sorted(data, key=lambda x: x[3], reverse=True):
        print(f"{p[0]} | {p[1]} | {p[2]} | {p[3]:.1f}")

if __name__ == "__main__":
    main()