class ValidWordAbbr {
    private String[] array;

    public ValidWordAbbr(String[] dictionary) {
        this.array = dictionary;
    }

    public boolean isUnique(String word) {
        String string = Character.toString(word.charAt(0)).concat(String.valueOf(word.length() - 2))
                                 . concat(Character.toString(word.charAt(word.length() - 1)));
        Map<String, List<String>> collect = Arrays.stream(array).collect(Collectors.groupingBy(str -> 
        {
            if (str.length() == 2)
                return str;
            return Character.toString(str.charAt(0)).concat(String.valueOf(str.length() - 2)).concat 
                   (Character.toString(str.charAt(str.length() - 1)));
        }));
        if (!collect.containsKey(string))
            return true;
        for (int i = 0; i < collect.get(string).size(); i++) {
            if (collect.get(string).get(i).equals(word) == false)
                return false;
        }
        return true;
    }
}
