package aoc;

import java.util.List;

public class Sub {
    public int calc(List<String> contents){
        int depth = 0;
        int vertical = 0;
        for (String content : contents) {
            int vertical1 = Integer.parseInt(content.substring(content.length() - 1));
            if(content.startsWith("forward")) {

                vertical += vertical1;
            }
            if(content.startsWith("down")) {
                depth += vertical1;
            }
            if(content.startsWith("up")) {
                depth -= vertical1;
            }
        }
        System.out.println(depth*vertical);
        return depth*vertical;
    }
}
