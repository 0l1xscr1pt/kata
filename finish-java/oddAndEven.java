public class oddAndEven {
    public static String evenOrOdd(int number) {
        return (number % 2 == 0) ? "Even" : "Odd";
    }

    public static void main(String[] args) {
        int number = 2;
        String result = evenOrOdd(number);
        System.out.println("Le résultat est : " + result);
    }
}