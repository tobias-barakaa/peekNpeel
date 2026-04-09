BITS 64

default rel ;relative...

section .data ; store strings
msg: db "Hello world", 0x0A ; message + newline

section .text
global _start ; give it access to all

_start:
     ; write(1, msg, len)
     mov rax, 1 ;sys write
     mov rdi, 1 ; file descriptor 1 = stdout
     lea rsi, [rel msg]  ; Pointer to message
     mov rdx, 12         ; 12 bytes to write to stdout
     syscall

     jmp _start ; assembly 

     ; exit(0)
     mov rax, 60   ; system_exit
     xor rdi, rdi ; status 0
     syscall