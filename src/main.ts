import { NestFactory } from "@nestjs/core";
import { AppModule } from "./graphql-api/app.module";
import { config } from "dotenv";

config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT || 3000;

    await app.listen(port);

    console.log(`Listening on port: ${port}`);
    console.log(`Explore graphql api on http://localhost:${port}/graphql`);
}
void bootstrap();
