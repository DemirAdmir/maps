# Typescript Maps Marker with Google Maps API

This is a Typescript application that generates a map with User and Company markers using the Google Maps API. The location coordinates for the markers are generated randomly using the Faker library.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Create a new Google Maps API key and enable the Maps JavaScript API.
4. Replace `GOOGLE_MAPS_API_KEY` in `index.html` with your API key.
5. Run `npx parcel index.html` to start the application.
6. Open `http://localhost:1234` in your browser to view the map.

## Usage

You can customize the project by modifying the `src/User.ts`, `src/Company.ts`, and `src/CustomMap.ts` files.

## Note

Make sure to keep your API key secure and not share it publicly, for example by adding the `.env` file to your `.gitignore`.

## Dependencies

This project uses the following dependencies:

- Typescript
- Faker
- Google Maps JavaScript API
- Parcel
- dotenv

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Note: You may need to modify the above example to fit your specific project needs. Additionally, it's important to include clear instructions on how to set up and run the project in the README, along with any other relevant information such as dependencies and acknowledgments.
