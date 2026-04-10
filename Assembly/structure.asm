global asm_print_animal
extern printf 

section .rodata 
    fmt_name db "name: %s", 10, 0
    fmt_legs db "legs: %d", 10, 0
    fmt_age db "Age: %d", 10, 0

section .text 
asm_print_animal:
    pursh rbx 
    ; RDI = Addresses Of ANIMAL
    mov rbx, rdi 

    ; print the name 
    lea rdi, [rel fmt_name]  ; 1st arg: format(printf)
    lea rsi, [rbx + 0] ; 2nd arg: 
    xor eax, eax ; no floating point vector args
    call printf

    ; print the total legs (offset 20)
    lea rdi, [rel fmt_legs] ; 1st arg: format
    mov esi, dword [rbx+20] ; 2nd arg (int) a-> total_legs;
    xor eax, eax 
    printf
    
    ; restore the old rbx value and return 
    pop rbx 
    ret