package aoc;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class FileReader {
    public List<String> getContents(){
        List<String> lines = new ArrayList<>();
        String line;
        try(BufferedReader br = new BufferedReader(new java.io.FileReader("target/classes/input.txt"))) {
            while ((line = br.readLine()) != null) {
                System.out.println("Line =>"+line);
                lines.add(line);
            }
        } catch (IOException e) {
            System.out.println("IOException in try block =>" + e.getMessage());
        }
        return lines;
    }
}
