[BITS 64]
global sum 
; int sum(int x:rdi, int y: rsi);

sum: 
    mov rax, rdi 
    add rax, rsi 
    ; all C programms expect the return value
    ; to be in the RAX register
    ret
