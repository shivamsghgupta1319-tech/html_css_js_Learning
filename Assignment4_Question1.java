// Name: Shivam gupta
// Roll No: 2510303486
// Assignment 4 - Question 1

public class Assignment4_Question1 {
    public static int fact(int n) {
        int res = 1;
        for (int i = 1; i <= n; i++) res *= i;
        return res;
    }

    public static int nCr(int n, int r) {
        return fact(n) / (fact(r) * fact(n - r));
    }

    public static void main(String[] args) {
        System.out.println("5C2 = " + nCr(5, 2));
    }
}
