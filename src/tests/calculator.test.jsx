import { test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "../Calculator";

//addition test
test("calculate addition", async () => {
    render(<Calculator />);

    const firstNumInput = screen.getByPlaceholderText("First number");
    userEvent.type(firstNumInput, "5");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("5");
    });

    const operatorSelector = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelector, "+");

    const secondNumInput = screen.getByPlaceholderText("Second number");
    userEvent.type(secondNumInput, "7");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("7");
    });

    userEvent.click(screen.getByRole("button", { name: "=" }));

    await waitFor(() =>
        expect(screen.getByPlaceholderText("Result").value).toBe("12")
    );
});

//subtraction test
test("calculate subtraction", async () => {
    render(<Calculator />);

    const firstNumInput = screen.getByPlaceholderText("First number");
    userEvent.type(firstNumInput, "20");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("20");
    });

    const operatorSelector = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelector, "-");

    const secondNumInput = screen.getByPlaceholderText("Second number");
    userEvent.type(secondNumInput, "10");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("10");
    });

    userEvent.click(screen.getByRole("button", { name: "=" }));

    await waitFor(() =>
        expect(screen.getByPlaceholderText("Result").value).toBe("10")
    );
});

//multiplication test
test("calculate multiplication", async () => {
    render(<Calculator />);

    const firstNumInput = screen.getByPlaceholderText("First number");
    userEvent.type(firstNumInput, "8");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("8");
    });

    const operatorSelector = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelector, "*");

    const secondNumInput = screen.getByPlaceholderText("Second number");
    userEvent.type(secondNumInput, "3");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("3");
    });

    userEvent.click(screen.getByRole("button", { name: "=" }));

    await waitFor(() =>
        expect(screen.getByPlaceholderText("Result").value).toBe("24")
    );
});

//division test
test("calculate division", async () => {
    render(<Calculator />);

    const firstNumInput = screen.getByPlaceholderText("First number");
    userEvent.type(firstNumInput, "63");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("63");
    });

    const operatorSelector = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelector, "/");

    const secondNumInput = screen.getByPlaceholderText("Second number");
    userEvent.type(secondNumInput, "9");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("9");
    });

    userEvent.click(screen.getByRole("button", { name: "=" }));

    await waitFor(() =>
        expect(screen.getByPlaceholderText("Result").value).toBe("7")
    );
});