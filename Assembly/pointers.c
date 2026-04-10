#include <stdio.h>

extern void asm_change_val(int* ptr);

int main() {
    int val = 50;
    asm_change_val(&val);
    printf("new val=%d\n", val);
    return 0;
}