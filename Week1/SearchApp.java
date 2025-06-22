public class SearchApp {
    public static void main(String[] args) {
        Product[] products = {
            new Product(10, "Keyboard", "Electronics"),
            new Product(5, "Notebook", "Stationery"),
            new Product(30, "Mouse", "Electronics"),
            new Product(20, "Pen", "Stationery")
        };

        int idx1 = SearchAlgorithms.linearSearch(products, 30);
        System.out.println("Linear found index: " + idx1 + " -> " +
            (idx1 >= 0 ? products[idx1] : "Not Found"));

        java.util.Arrays.sort(products,
            java.util.Comparator.comparingInt(Product::getProductId));

        int idx2 = SearchAlgorithms.binarySearch(products, 30);
        System.out.println("Binary found index: " + idx2 + " -> " +
            (idx2 >= 0 ? products[idx2] : "Not Found"));
    }
}

class Product {
    private int productId;
    private String productName;
    private String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public int getProductId() { return productId; }
    @Override
    public String toString() {
        return productId + ": " + productName + " (" + category + ")";
    }
}

class SearchAlgorithms {
    public static int linearSearch(Product[] arr, int targetId) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i].getProductId() == targetId) return i;
        }
        return -1;
    }

    public static int binarySearch(Product[] arr, int targetId) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            int id = arr[mid].getProductId();
            if (id == targetId) return mid;
            else if (id < targetId) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}
