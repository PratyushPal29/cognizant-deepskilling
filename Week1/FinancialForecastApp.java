public class FinancialForecastApp {
    public static void main(String[] args) {
        double principal = 1000.0;
        double[] rates = {0.05, 0.04, 0.06, 0.03}; 
        int years = rates.length;
        
        double result = FinancialForecast.forecast(principal, rates, years);
        System.out.printf("Future value after %d years: %.2f%n", years, result);
    }
}

class FinancialForecast {
    public static double forecast(double principal, double[] rates, int years) {
        if (years == 0) return principal;
        double prev = forecast(principal, rates, years - 1);
        return prev * (1 + rates[years - 1]);
    }
}
