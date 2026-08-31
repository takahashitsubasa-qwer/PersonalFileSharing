#include <stdio.h>
#include <string.h>
int main(void) {
    const char *string = "AAABBCDDDD";
    size_t len = strlen(string);
    char RLE_string[30] = "";
    int count = 1;

    for (int i=0; i<len; i++){
        if (i+1 < len && string[i] == string[i+1]) {
            count++;
        } else {
            sprintf(RLE_string + strlen(RLE_string), "%c%d", string[i], count);
            count = 1;
        }
    }

    printf("%s\n", RLE_string);
    
    return 0;
}