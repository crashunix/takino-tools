Takino
======

**Takino** is a collection of useful tools for developers, including password, CPF, CNPJ, and RG generators, as well as CPF and CNPJ validators.

Features
--------

*   **Password Generator**: Generate custom passwords with various options.
*   **CPF Generator**: Generate random valid CPFs.
*   **CNPJ Generator**: Generate random valid CNPJs.
*   **RG Generator**: Generate random valid RGs.
*   **CPF Validator**: Validate Brazilian CPFs.
*   **CNPJ Validator**: Validate Brazilian CNPJs.

Screenshot
----------

![Takino Screenshot](./screenshot.png)

Getting Started
---------------

### Prerequisites

Make sure you have the following software installed on your machine:

*   Node.js (v18 or later)
*   npm (v8 or later)
*   Tauri (v1.2 or later)
*   Rust and Cargo (for Tauri)

### Installation

1.  **Clone the repository**
    
        git clone https://github.com/crashunix/takino-tools.git
        cd takino-tools
    
2.  **Install dependencies**
    
        npm install
    

### Running the Project

#### Development Mode

To run the project in development mode:

    
1.  **Start the Tauri development server**
    
        cargo tauri dev
    

This will start the development server at `http://localhost:3000` and launch the Tauri application.

#### Production Build

To create a production build of the project:

1.  **Build the Tauri application**
    
        cargo tauri build
    

This will generate the production builds in the `target` directory.

### Contributing

Contributions are welcome! Please follow these steps to contribute:

1.  **Fork the repository**
2.  **Create a new branch**
    
        git checkout -b feature/your-feature-name
    
3.  **Make your changes**
4.  **Commit your changes**
    
        git commit -m "Add some feature"
    
5.  **Push to your branch**
    
        git push origin feature/your-feature-name
    
6.  **Create a pull request**

### License

Distributed under the MIT License. See `LICENSE` for more information.

* * *

This project was created with ❤️ by [crashunix](https://github.com/crashunix).

* * *

### Additional Notes

*   **Styling**: The project uses Tailwind CSS for styling.
*   **Form Handling**: The project uses `react-hook-form` for handling forms.
*   **Validation**: Validation is handled using `zod`.

### Issues

If you encounter any issues, please create a [new issue](https://github.com/crashunix/takino-tools/issues) on GitHub.

### Contact

If you have any questions or feedback, feel free to reach out at [jgomesmacario@outlook.com](mailto:jgomesmacario@outlook.com).

* * *

This README provides an overview of the project, including instructions for setting up and running the project, as well as guidelines for contributing. If you have any additional questions, please contact the maintainers.