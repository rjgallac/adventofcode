package aoc;

import java.util.List;

public class Application {
    public static void main(String[] args) {
        FileReader fileReader = new FileReader();
        List<String> contents = fileReader.getContents();
        Sub sub = new Sub();
        sub.calc(contents);
    }
}
