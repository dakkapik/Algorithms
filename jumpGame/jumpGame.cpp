#include <iostream>
#include <string>
#include <unordered_map>
#include <typeinfo>
using namespace std;

int longestRepeatingSubstring(string str) {

    unordered_map<int, char*> hashMap;


    for(int i = 0; i < str.length() - 1; i++){
        hashMap.insert(i, { str[i] , str[i + 1] });
    }

    // for(int i = 0; i < str.length)
    
    // for(auto x:hashMap)
    //     cout << x.second << endl;
    
    return 0;
}

int main(){
    int result = longestRepeatingSubstring("abbaba");
    cout << "END \n result: " + result;

    return 0;
}