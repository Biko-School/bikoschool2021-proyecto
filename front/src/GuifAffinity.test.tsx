import { render, screen, waitFor } from "@testing-library/react";
import GuifCard from "./components/GuiffCard";

describe("GuifAffinity", () => {
  it("shows the alt tag of a guif", async () => {
    // Arrange

    // Act
    render(<GuifCard />);

    // Assert
    await waitFor(() =>
      expect(screen.getByAltText(/guif/i)).toBeInTheDocument()
    );
  });
  it("shows an image", async () => {
    // Arrange
    //TODO: hacer mock
    //await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1));

    // Act
    render(<GuifCard />);

    // Assert
    await waitFor(() => {
      const image = screen.getByAltText("guif");
      expect(image).toHaveAttribute(
        "src",
        expect.stringMatching("https://media4.giphy.com/media")
      );
    });
  });
});
