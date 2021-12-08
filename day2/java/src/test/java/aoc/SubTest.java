package aoc;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class SubTest {

    @Test
    public void testForwardAndDown(){
        Sub sub = new Sub();
        List<String> strings = new ArrayList<>();
        strings.add("forward 7");
        strings.add("down 8");

        int calc = sub.calc(strings);

        assertEquals(56, calc);

    }

    @Test
    public void testInput(){
        Sub sub = new Sub();
        List<String> strings = new ArrayList<>();
        strings.add("forward 7");
        strings.add("down 8");
        strings.add("up 2");
        int calc = sub.calc(strings);

        assertEquals(42, calc);

    }
}