; WHAT ARE REGISTERS

; registers are places we can store numbers

; AL (8 bit) AH(8-bits)
; AX(16-bit) (AH | AL >> 8)
mov ax, 0xfff4
; AL = F4
; AH = FF
mov ah, 0xf3
; AX = F3F4

; EAX = 32 bits
; E(upper 16 bits) | AX (lower 16 bits)
mov eax, 0xf4f4ffff
; AX = ffff
; E = f4f4 (you can't access E separate)

; RAX (64 bit register)
; R | EAX
; R (upper 32 bits) EAX (lower 32 bits)

mov rax, 0xf4f4f4f4f4ffffffff
; EAX = ffffffff
; R = f4f4f4f4f4 (R cannot be accessed alone)

; AX, CX, DX, BX
; CX (CH | CL) ; 16 bits  ECX(32 BITS) RCX(64 BITS)
; AX (AX | AL) ; 16 bits  EAX(32 BITS) RAX(64 BITS)
; DX ( DH | DL)
; BX (BH | BL)

