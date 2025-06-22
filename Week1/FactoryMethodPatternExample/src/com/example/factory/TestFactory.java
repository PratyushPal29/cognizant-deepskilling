package com.example.factory;

public class TestFactory {
    public static void main(String[] args) {
        DocumentFactory factory;

        factory = new WordFactory();
        IDocument doc1 = factory.createDocument();
        doc1.open(); doc1.close();

        factory = new PdfFactory();
        IDocument doc2 = factory.createDocument();
        doc2.open(); doc2.close();

        factory = new ExcelFactory();
        IDocument doc3 = factory.createDocument();
        doc3.open(); doc3.close();
    }
}
