public class doubleTheInteger {
    public static int doubleInteger(int number) {
        return number *= 2;
    }

    public static void main(String[] args) {
        int number = 3;
        int result = doubleInteger(number);
        System.out.println("Le résultat est : " + result);
    }
}