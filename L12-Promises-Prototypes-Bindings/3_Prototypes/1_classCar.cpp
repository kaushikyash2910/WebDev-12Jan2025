#include <iostream>
using namespace std;

class Car
{
public:
    string name;
    int price;

    Car(string s, int n)
    {
        name = s;
        price = n;
    }

    void details()
    {
        cout << "Name  : " << this->name << endl;
        cout << "Price : " << this->price << endl;
    }
};

int main()
{
    Car A("BWM", 100);
    A.details();
}