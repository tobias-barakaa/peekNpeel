[BITS 64]
extern printf 
global main 

section .data
original_str db "Hello world this will be copied", 0

section .bss 
new_str resb 128

sectioin .data 

main 
lea

main:
    lea rsi, [rel original_str]
    lea rdi, [new_str]

    lodsb ; AL = [RSI], RSI++
    stosb ; [RDI]  set to = AL, RDI++
    lodsb ; AL = e
    stosb ; [RDI] = e

.loop_str:
     lodsb ; AL = [RSI], RSI++
     cmp al, 0x00
     je .loop_str_done
     stosb ; [RDI] = AL, RDI++
     jmp .loop_str

.loop_str_done:
    mov rdi, new_str 
    xor rax, rax ; no float args
    call printf
    ret