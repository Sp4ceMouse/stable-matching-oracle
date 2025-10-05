int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Usage: %s <instruction_file>\n", argv[0]);
        return EXIT_FAILURE;
    }
    else{
        main_process();
    }

}