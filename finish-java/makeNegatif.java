public class makeNegatif {
    public static int makeNegatifNumber(final int number) {
        int result = number;
        if (number > 0)
            result = number - number - number;
        return result;
    }

    public static void main(String[] args) {
        int number = -0;
        int result = makeNegatifNumber(number);
        System.out.println("Le résulat est : " + result);
    }

}