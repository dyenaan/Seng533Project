var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/compute", () => Results.Json(new { result = 42 }));

app.Run();
