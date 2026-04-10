[BITS 64]
global asm_change_val

section .text
; first arg = RDI
; second arg = RSI
; ...
asm_change_val
    mov dword [rdi], ;123 *ptr = 123
    ret