#include <stdio.h>
#include <string.h>
int main(){
    char a[1001];
    char b[1001];
    scanf("%s %s",a,b);
    int sum = strlen(a)+strlen(b);
    for(int i=0;i<strlen(a);i++){
        for(int j=0;j<strlen(b);j++){
            if(a[i]==b[j]){
                a[i]=-1;
                b[j]=-2;
                sum-=2;
            }
        }
    }
    printf("%d",sum);
}