[BITS 64]
extern printf 
global main 

section .data
original_str db "Hello world this will be copied", 0

section .bss 
new_str resb 128

main:
    lea rsi, [rel original_str]
    lea rdi, [new_str]

    lodsb ; AL = [RSI], RSI++
    stosb ; [RDI]  set to = AL, RDI++